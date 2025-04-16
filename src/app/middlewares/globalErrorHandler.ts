import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';
import handleValidationError from '../error/handleValidationError';
import handleCastError from '../error/handleCastError';
import handleDuplicateError from '../error/handleDuplicateError';
import AppError from '../error/AppError';
import config from '../config';
import { Prisma } from '@prisma/client';
import handleNotFoundError from '../error/handleNotFoundError';

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let status = 500;
    let message = 'Something went wrong';
    let stack = config.NODE_ENV === 'development' ? err.stack : undefined;

    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if (err?.name === 'ValidationError') {
        const simplifiedError = handleValidationError(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if (err?.name === 'CastError') {
        const simplifiedError = handleCastError(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if (err?.code === 'P2002') {
        const simplifiedError = handleDuplicateError(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
        const simplifiedError = handleNotFoundError(err);
        status = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    else if (err instanceof AppError) {
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

export default globalErrorHandler;
