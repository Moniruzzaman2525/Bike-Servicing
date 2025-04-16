

import { z } from 'zod';

const create = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Customer name is required',
        }),
        email: z.string({
            required_error: 'Customer email is required',
        }),
        phone: z.string({
            required_error: 'Customer phone number is required',
        }),
    }),
});


export const customerValidation = {
    create,
};
