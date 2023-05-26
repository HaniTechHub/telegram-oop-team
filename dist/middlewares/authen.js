"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredLoginField = void 0;
const requiredLoginField = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ success: false, message: "Missing Username Or Password" });
    }
    return next();
};
exports.requiredLoginField = requiredLoginField;
