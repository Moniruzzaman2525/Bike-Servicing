

import { z } from 'zod';

const bikeSchema = z.object({
    brand: z.string({
        required_error: 'Brand is required',
    }),
    model: z.string({
        required_error: 'Model is required',
    }),
    year: z.number({
        required_error: 'Year is required',
    }).int().min(1900, { message: 'Year must be a valid number greater than or equal to 1900' }).max(new Date().getFullYear(), {
        message: 'Year cannot be in the future',
    }),
    customerId: z.string().uuid({
        message: 'Customer ID must be a valid UUID',
    }),
});

export const bikeValidation = { bikeSchema };
