"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string({
            required_error: 'Bike ID is required',
        }).uuid({ message: 'Invalid bike ID format' }),
        serviceDate: zod_1.z.string({
            required_error: 'Service date is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }).min(1, { message: 'Description cannot be empty' }),
        status: zod_1.z.string({
            required_error: 'Status is required',
        })
    }),
});
exports.serviceValidation = { create };
