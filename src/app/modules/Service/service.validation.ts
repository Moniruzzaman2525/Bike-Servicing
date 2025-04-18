import { z } from "zod";


const create = z.object({
    body: z.object({
        bikeId: z.string({
            required_error: 'Bike ID is required',
        }).uuid({ message: 'Invalid bike ID format' }),
        serviceDate: z.string({
            required_error: 'Service date is required',
        }),
        description: z.string({
            required_error: 'Description is required',
        }).min(1, { message: 'Description cannot be empty' }),
        status: z.string({
            required_error: 'Status is required',
        })
    }),
});


export const serviceValidation = { create };
