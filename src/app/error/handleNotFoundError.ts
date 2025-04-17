import { Prisma } from '@prisma/client';
import httpStatus from 'http-status';
export const handleNotFoundError = (err: Prisma.PrismaClientKnownRequestError) => {

    const modelName = err.meta?.modelName || 'Unknown Model';

    const errorMessage = `${modelName} not found`;
    const statusCode = httpStatus.NOT_FOUND;

    return { statusCode, message: errorMessage };
};

export default handleNotFoundError;
