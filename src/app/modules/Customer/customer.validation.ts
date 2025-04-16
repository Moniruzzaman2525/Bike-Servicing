

import { z } from 'zod';

const create = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Customer name is required',
        }),
        email: z.string({
            required_error: 'Customer email is required',
        }).email({
            message: 'Please provide a valid email address',
        }),
        phone: z.string({
            required_error: 'Customer phone number is required',
        }),
    }),
});

const update = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email({
            message: 'Please provide a valid email address',
        }).optional(),
        phone: z.string().optional(),
    }),
});
export const customerValidation = {
    create,
    update
};
