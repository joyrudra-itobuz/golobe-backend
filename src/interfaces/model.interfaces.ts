import { Document } from "mongoose";
import { UserTypes } from "../enums/types.enum";

export interface UserModel extends Document {
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: number;
  password: string;
  isActive?: boolean;
  profileImage?: string;
  imageName?: string;
  lastLogin?: string;
  userType: UserTypes;
}
