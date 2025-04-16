import { ZodError } from 'zod';

const handleZodError = (err: ZodError) => {

    const message = err.errors.length > 0 ? err.errors[0].message : 'Zod validation error';

    const statusCode = 400;

    return { statusCode, message };
};

export default handleZodError;

