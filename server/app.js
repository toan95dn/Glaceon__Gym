import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT;

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
