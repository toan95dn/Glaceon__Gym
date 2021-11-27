//This file is used for authentication (signup/login)
import express from "express";
import passport from "passport";
import User from "../models/User.mjs";
import { validateSignup, validateSignin } from "../middleware.mjs";
import {
  createUser,
  sendVerificationEmail,
  verifyUser,
} from "../controllers/userController.mjs";
import catchAsync from "../utils/catchAsync.mjs";

const authRoutes = express.Router();

//Sign up
authRoutes.post(
  "/signup",
  validateSignup,
  catchAsync(createUser),
  catchAsync(sendVerificationEmail)
);

//Verification
authRoutes.get("/auth/verify/:activateCode", verifyUser);

//Sign in
authRoutes.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/errorlogin",
    successRedirect: "/suclogin",
  })
);

//Sign out
authRoutes.get("/signout", (req, res) => {
  console.log("logging out ...");
  console.log(req.user._id);
  req.logout();
  res.send("out");
});

authRoutes.get("/islogin", (req, res) => {
  console.log("CHeck is login");
  console.log(req.isAuthenticated());
  res.send(req.isAuthenticated());
});

export default authRoutes;
