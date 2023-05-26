import express from "express";
import AuthenController from "../controller/authen.controller";
import {
  validateLogin,
  validateRegister,
  validateToken,
} from "../middleware/authen.middleware";
const router = express.Router();
const controller = new AuthenController();

router.post("/register", validateRegister, controller.register_account);

router.post("/login", validateLogin, controller.login_account);

router.get("/profile", validateToken, controller.get_profile);

export default router;
