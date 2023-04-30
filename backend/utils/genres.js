exports.generateOTP = (otpLength = 4) => {
  let OTP = "";
  for (let i = 1; i <= otpLength; i++) {
    var randomValue = Math.round(Math.random() * 9);
    OTP += randomValue;
  }

  return OTP;
};

