"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidation = void 0;
const zod_1 = require("zod");
const bikeSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string({
            required_error: 'Brand is required',
        }),
        model: zod_1.z.string({
            required_error: 'Model is required',
        }),
        year: zod_1.z.number({
            required_error: 'Year is required',
        }).int().min(1900, { message: 'Year must be a valid number greater than or equal to 1900' }).max(new Date().getFullYear(), {
            message: 'Year cannot be in the future',
        }),
        customerId: zod_1.z.string({
            required_error: 'Customer ID is required',
        }).uuid(),
    })
});
exports.bikeValidation = { bikeSchema };
