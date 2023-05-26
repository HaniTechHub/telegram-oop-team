"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authen_controller_1 = __importDefault(require("../controller/authen.controller"));
const authen_middleware_1 = require("../middleware/authen.middleware");
const router = express_1.default.Router();
const controller = new authen_controller_1.default();
router.post("/register", authen_middleware_1.validateRegister, controller.register_account);
router.post("/login", authen_middleware_1.validateLogin, controller.login_account);
router.get("/profile", authen_middleware_1.validateToken, controller.get_profile);
exports.default = router;
