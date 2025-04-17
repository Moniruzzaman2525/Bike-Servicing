import { z } from "zod";


const create = z.object({
    body: z.object({
        bikeId: z.string().uuid({ message: 'Invalid bike ID format' }),
        serviceDate: z.date({
            message: 'Invalid service date format',
        }).refine((date) => !isNaN(date.getTime()), {
            message: 'Invalid date',
        }),
        description: z.string({
            required_error: 'Description is required',
        }).min(1, { message: 'Description cannot be empty' }),
    }),
});

export const serviceValidation = { create };
