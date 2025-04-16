// src/utils/errorUtils.ts
import { CustomError } from './CustomError';

// Generic error generator for any model/entity
export const generateError = (status: number, model: string, action: string) => {
    return new CustomError(
        status,
        `${model} not found while trying to ${action}`,
    );
};

// Bad Request error generator (this can be reused for any entity)
export const badRequestError = (message: string) =>
    new CustomError(400, message);
