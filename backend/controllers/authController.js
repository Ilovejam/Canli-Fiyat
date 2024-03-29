const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const SmsVerificationTokenSchema = require("./../models/smsVerificationTokenSchema");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const { generateOTP } = require("./../utils/genres");
const { Vonage } = require("@vonage/server-sdk");
const { isValidObjectId } = require("mongoose");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.get("x-forwarded-proto") === "https",
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// api herkese göndermiyor
// apinin gönderdiği numara değişebilir canli fiyat or 054395421
// vonagein kurumsal heasbı olmalı ve configler değişecek

exports.signup = catchAsync(async (req, res, next) => {
  const { name, telephone, password, passwordConfirm } = req.body;

  const oldUser = await User.findOne({ telephone });

  if (oldUser) {
    return next(new AppError("This telephone is already in use", 400));
  }

  const newUser = new User({
    name,
    telephone,
    password,
    passwordConfirm,
  });

  await newUser.save();

  let OTP = generateOTP();

  const newSmsVerificationTokenSchema = new SmsVerificationTokenSchema({
    owner: newUser._id,
    token: OTP,
  });

  await newSmsVerificationTokenSchema.save();

  const vonage = new Vonage({
    apiKey: process.env.SMS_NEXMO_API_KEY,
    apiSecret: process.env.SMS_NEXMO_API_SECRET_KEY,
  });

  const from = "Vonage APIs";
  const to = `+90${newUser.telephone}`;
  console.log(to);
  const text = `Your Verification Code is ${OTP}`;

  console.log("OTP CODE = ", OTP);

  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });

  createSendToken(newUser, 201, req, res);
});

exports.verifySMS = catchAsync(async (req, res, next) => {
  const { userId, OTP } = req.body;
  if (!isValidObjectId(userId)) {
    return next(new AppError("user not found", 401));
  }

  const user = await User.findById(userId);

  if (user.isVerified) {
    return next(new AppError("user is already verified", 401));
  }

  const token = await SmsVerificationTokenSchema.findOne({ owner: userId });
  if (!token) {
    return next(new AppError("token not found", 401));
  }

  const isMatched = await token.compareToken(OTP);
  if (!isMatched) {
    return next(new AppError("Please submit a valid OTP", 401));
  }

  user.isVerified = true;

  await user.save({ validateBeforeSave: false });

  await SmsVerificationTokenSchema.findByIdAndDelete(token._id);

  const jwtToken = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.get("x-forwarded-proto") === "https",
  });

  user.password = undefined;

  res.status(200).json({
    status: "success",
    jwtToken,
    data: {
      user,
    },
    message: "Your telephone is verified",
  });
});

// telefon, password validate
exports.login = catchAsync(async (req, res, next) => {
  const { telephone, password } = req.body;

  if (!telephone || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  const user = await User.findOne({ telephone }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect telephone or password", 401));
  }

  if (!user.isVerified) {
    return next(new AppError("Your telephone is not verified", 401));
  }

  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id.sub);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.", 401)
    );
  }

  req.user = currentUser;
  next();
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id).select("+password");

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  createSendToken(user, 200, res);
});
