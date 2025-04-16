import { Prisma } from '@prisma/client';

export const handleNotFoundError = (err: Prisma.PrismaClientKnownRequestError) => {

    const modelName = err.meta?.modelName || 'Unknown Model';

    const errorMessage = `${modelName} not found`;
    const statusCode = 404;

    return { statusCode, message: errorMessage };
};

export default handleNotFoundError;
