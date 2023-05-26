"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError {
    constructor(message, status = 500) {
        this.message = message;
        this.status = status;
        this.data = null;
    }
}
exports.default = AppError;
