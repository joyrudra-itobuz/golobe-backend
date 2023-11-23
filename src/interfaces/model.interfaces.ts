import { Document } from "mongoose";

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
}
