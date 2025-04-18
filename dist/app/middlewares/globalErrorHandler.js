"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../error/handleZodError"));
const handleValidationError_1 = __importDefault(require("../error/handleValidationError"));
const handleCastError_1 = __importDefault(require("../error/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../error/handleDuplicateError"));
const AppError_1 = __importDefault(require("../error/AppError"));
const config_1 = __importDefault(require("../config"));
const client_1 = require("@prisma/client");
const handleNotFoundError_1 = __importDefault(require("../error/handleNotFoundError"));
const globalErrorHandler = (err, req, res, next) => {
    let status = 500;
    let message = 'Something went wrong';
    let stack = config_1.default.NODE_ENV === 'development' ? err.stack : undefined;
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        const simplifiedError = (0, handleCastError_1.default)(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 'P2002') {
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
        const simplifiedError = (0, handleNotFoundError_1.default)(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if (err instanceof AppError_1.default) {
        status = err.statusCode;
        message = err.message;
    }
    res.status(status).json({
        success: false,
        status: status,
        message,
        stack,
    });
};
exports.default = globalErrorHandler;
