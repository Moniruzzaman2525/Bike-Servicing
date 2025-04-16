import { ZodError } from 'zod';

const handleZodError = (err: ZodError) => {
    // If there are any errors, return the first error message
    const message = err.errors.length > 0 ? err.errors[0].message : 'Zod validation error';

    const statusCode = 400;  // HTTP status code for validation errors

    return { statusCode, message };
};

export default handleZodError;

