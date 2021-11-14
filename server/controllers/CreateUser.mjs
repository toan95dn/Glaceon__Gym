import User from "../models/User.mjs";
import sign from "jwt-encode";

export default async function createUser(req, res) {
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
  console.log(newUser);
  res.status(200).json(user);
}
