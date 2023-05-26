import { CreateUserType, UserType } from "../interface/user.interface";
import UserModel from "../model/user.model";

export default class UserService {
  public find_all = async () => {
    return await UserModel.find();
  };
  public find_by_username = async (username: string) => {
    return await UserModel.findOne({ username });
  };
  public find_by_id = async (userId: string) => {
    return await UserModel.findById(userId);
  };
  public create_user = async (data: CreateUserType) => {
    return await UserModel.create(data);
  };
}

export const user_service = new UserService();
