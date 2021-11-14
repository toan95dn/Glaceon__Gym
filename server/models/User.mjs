import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { boolean } from "yup";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    active: {
      type: boolean,
    },
    activateCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("User", UserSchema);

export default User;
