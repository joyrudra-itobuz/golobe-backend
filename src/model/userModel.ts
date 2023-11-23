import mongoose from "mongoose";
import { UserModel } from "../interfaces/model.interfaces";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, default: uuidv4() },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    password: { type: String, required: true },
    profileImage: { type: String },
    imageName: { type: String },
    lastLogin: { type: String },
    deleteStatus: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
    _id: false,
  }
);

export const userModel = mongoose.model<UserModel>("users", userSchema);
