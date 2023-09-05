import { Schema, model } from "mongoose";

const Token = Schema({
  isActivated: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

export default model("Token", Token);
