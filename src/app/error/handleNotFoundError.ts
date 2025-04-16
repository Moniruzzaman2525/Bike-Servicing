// src/error/handleNotFoundError.ts
import { Prisma } from '@prisma/client';

export const handleNotFoundError = (err: Prisma.PrismaClientKnownRequestError) => {
    const modelName = err.meta?.modelName || 'Unknown Model';
    const errorMessage = `This ${modelName} not found`;

    const error = [{
        path: '',
        message: errorMessage,
    }];

    const statusCode = 404;
    return { statusCode, message: `This ${modelName} not found`, error };
};

export default handleNotFoundError;
