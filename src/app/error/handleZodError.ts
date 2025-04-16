
import { ZodError } from 'zod';

const handleZodError = (err: ZodError) => {
    const error = err.errors.map(e => ({
        path: e.path.join('.'),
        message: e.message,
    }));
    const statusCode = 400;
    return { statusCode, message: 'Zod validation error', error };
};

export default handleZodError;
