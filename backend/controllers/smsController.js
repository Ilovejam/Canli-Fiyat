const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "6a52d16d",
  apiSecret: "FhBZiVmmB9Ne43c5",
});

const from = "Vonage APIs";
const to = "905439609248";
const text = "kod";

exports.createSms = catchAsync(async (req, res, next) => {
  var data = await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });

  res.status(201).json({
    status: "success",
    data: {
      data,
    },
  });
});
