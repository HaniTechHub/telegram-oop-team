import { Request, Response, NextFunction } from "express";
import jwt, { Jwt } from "jsonwebtoken";
import { appConfig } from "../constants/config";
import { LoginRequestBody } from "../interface/authen.interface";
import AppError from "../util/appError";

const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as LoginRequestBody;
  if (!username || !password) {
    return res
      .status(400)
      .json(new AppError("Missing Username Or Password", 400));
  }
  return next();
};

const validateLogin = validateRegister;

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json(new AppError("You are not logged in", 401));
  }
  try {
    const decoded = jwt.verify(token, appConfig.ACCESS_TOKEN_SECRET);
    res.locals.userId = (decoded as { userId: string }).userId;
    next();
  } catch (error) {
    res.status(401).json(new AppError("Invalid Token", 401));
  }
};

export { validateRegister, validateLogin, validateToken };
