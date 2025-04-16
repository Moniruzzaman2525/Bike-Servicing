import { Prisma } from '@prisma/client';

const handleCastError = (err: Prisma.PrismaClientKnownRequestError) => {
    const message = 'Invalid ID format or ID cast error';
    const statusCode = 400;

    return { statusCode, message };
};

export default handleCastError;
