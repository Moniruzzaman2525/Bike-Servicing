import { Prisma } from '@prisma/client';

const handleCastError = (err: Prisma.PrismaClientKnownRequestError) => {
    const path = err?.meta?.target ?? 'Unknown';
    const error = [{
        path: typeof path === 'string' ? path : 'Unknown',
        message: 'Invalid ID format or ID cast error',
    }];

    const statusCode = 400;
    return { statusCode, message: 'Invalid ID', error };
};

export default handleCastError;
