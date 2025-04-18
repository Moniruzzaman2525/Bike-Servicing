"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Customer name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Customer email is required',
        }).email({
            message: 'Please provide a valid email address',
        }),
        phone: zod_1.z.string({
            required_error: 'Customer phone number is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email({
            message: 'Please provide a valid email address',
        }).optional(),
        phone: zod_1.z.string().optional(),
    }),
});
exports.customerValidation = {
    create,
    update
};
