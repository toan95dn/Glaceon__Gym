import { userSchema } from "./schemas.mjs";
import ExpressError from "./utils/ExpressError.mjs";
import passport from "passport";

const validateSignup = (req, res, next) => {
  try {
    userSchema.validateSync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const message = err.errors.join("-");
    next(new ExpressError(message, 500));
  }
};

const validateSignin = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/errorlogin",
  failureFlash: false,
});

const isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    throw new ExpressError("Please log in first", 500);
  }
  next();
};

export { validateSignup, validateSignin, isLoggedin };
