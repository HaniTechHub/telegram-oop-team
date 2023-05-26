import argon2 from "argon2";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { appConfig } from "../constants/config";
import {
  LoginRequestBody,
  RegisterRequestBody,
} from "../interface/authen.interface";
import { user_service } from "../services/user.service";
import AppError from "../util/appError";

class AuthenController {
  public register_account = async (req: Request, res: Response) => {
    const { username, password } = req.body as RegisterRequestBody;
    try {
      const user = await user_service.find_by_username(username);
      if (user) {
        return res.json(new AppError("User Already Exist", 400));
      }
      const hanshedPassword = await argon2.hash(password);
      const newUser = await user_service.create_user({
        username,
        password: hanshedPassword,
      });
      const accessToken = jwt.sign(
        { userId: newUser.id },
        appConfig.ACCESS_TOKEN_SECRET
      );
      return res.json({
        status: res.statusCode,
        data: {
          user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            phoneNumber: newUser.phoneNumber,
          },
          accessToken,
        },
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };

  public login_account = async (req: Request, res: Response) => {
    const { username, password } = req.body as LoginRequestBody;
    try {
      const user = await user_service.find_by_username(username);
      if (!user) {
        return res.json(new AppError("Invalid Username or Password", 400));
      }
      const isPasswordValid = await argon2.verify(user.password, password);
      if (!isPasswordValid) {
        return res
          .status(400)
          .json(new AppError("Incorrect Username Or Password", 400));
      }
      const accessToken = jwt.sign(
        { userId: user._id },
        appConfig.ACCESS_TOKEN_SECRET
      );
      res.status(200).json({
        status: res.statusCode,
        data: {
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
          },
          accessToken,
        },
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
  public get_profile = async (req: Request, res: Response) => {
    try {
      const user = await user_service.find_by_id(res.locals.userId);
      res.status(200).json({
        status: res.statusCode,
        data: {
          id: user?._id,
          username: user?.username,
          email: user?.email,
          phoneNumber: user?.phoneNumber,
        },
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
}

export default AuthenController;
