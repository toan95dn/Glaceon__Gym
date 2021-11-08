import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/User.mjs";
import authRoutes from "./routes/auth.mjs";
import morgan from "morgan";
import session from "express-session";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({ secret: "not a good one", resave: true, saveUninitialized: true })
);

//Config Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT);
    console.log("Connect to MongoDB successfully");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello Glaceon Team!");
});

app.use("/auth", authRoutes);

//Error handling
app.use(function (err, req, res, next) {
  console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
  console.error("Message from backend: ", err.message);
  res
    .status(err.statusCode ? err.statusCode : 500)
    .json({ message: err.message });
});
