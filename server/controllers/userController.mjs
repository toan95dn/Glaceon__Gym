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
    to: req.body.email,
    subject: "Welcome to gym matching app from UCSD!",
    text: "Hello, please confirm your email",
    html: `http://localhost:3001/auth/signup/${res.locals.activateCode}`,
  };

  await sender.sendMail(mailOptions);
  res.status(200).json({ emailSentTo: res.locals.activateCode });
}

async function verifyUser(req, res, next) {
  const filter = { activateCode: req.params.activateCode };
  const update = { active: true };
  await User.findOneAndUpdate(filter, update);
}

export { createUser, sendVerificationEmail, verifyUser };
