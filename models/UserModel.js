import { Schema, model } from "mongoose";

const User = Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export default model("User", User);
