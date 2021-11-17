import User from "../models/User.mjs";
import sign from "jwt-encode";
import nodemailer from "nodemailer";

async function createUser(req, res, next) {
  console.log("Create user running");
  //Generate unique string for user verification
  const secret = "Glaceon_Gym";
  const data = {
    email: req.body.email,
  };
  const jwt = sign(data, secret);

  const user = new User({
    email: req.body.email,
    activateCode: jwt,
    active: false,
  });

  //Create new user
  const newUser = await User.register(user, req.body.password);
  res.locals.activateCode = jwt;
  next();
}

async function sendVerificationEmail(req, res, next) {
  // Connect to mail service
  let sender = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: "Glaceon_Team",
    to: "toan95dn@gmail.com",
    subject: "Welcome to gym matching app from UCSD!",
    text: "Hello, please confirm your email",
    html: `${res.locals.activateCode}`,
  };

  sender.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error sending email", err);
    } else {
      console.log("email sent successfully");
    }
  });

  res.status(200).json({ emailSentTo: res.locals.activateCode });
}

export { createUser, sendVerificationEmail };
