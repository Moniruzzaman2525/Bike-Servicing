

import { z } from 'zod';

const create = z.object({
    body: z.object({
        name: z.string({
            required_error: 'name is required',
        }),
        email: z.string({
            required_error: 'email is required',
        }),
        phone: z.string({
            required_error: 'phone is required',
        }),
    }),
});


export const customerValidation = {
    create,
};
