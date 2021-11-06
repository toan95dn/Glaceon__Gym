import User from "../models/User.mjs";

export default async function createUser(req, res) {
  console.log("Create user running");
  const user = new User({
    email: req.body.email,
  });
  const newUser = await User.register(user, req.body.password);
  console.log(newUser);
  res.status(200).json(user);
}
