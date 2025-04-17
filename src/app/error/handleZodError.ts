import { ZodError } from 'zod';

const handleZodError = (err: ZodError) => {
    const messages = err.errors.map(e => e.message);

    const message = messages.length > 1
        ? `${messages.slice(0, -1).join(', ')} and ${messages[messages.length - 1]}`
        : messages[0] || 'Zod validation error';

    const statusCode = 400; 

    return { statusCode, message };
};

export default handleZodError;
