import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Glaceon Team!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
  console.log(process.env.PORT);
});
