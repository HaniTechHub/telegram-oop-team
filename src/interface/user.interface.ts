import { Types } from "mongoose";

export interface UserType {
  id: Types.ObjectId;
  username: string;
  email: string;
  phoneNumber: string;
}

export interface CreateUserType {
  username: string;
  password: string;
}
