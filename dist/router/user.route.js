"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const authen_middleware_1 = require("../middleware/authen.middleware");
const router = express_1.default.Router();
const controller = new user_controller_1.default();
router.get("/", authen_middleware_1.validateToken, controller.get_list_user);
router.get("/:uid", authen_middleware_1.validateToken, controller.get_user_by_id);
exports.default = router;
