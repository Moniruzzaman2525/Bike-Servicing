"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const prisma_1 = __importDefault(require("../../../helpers/prisma"));
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUnique({
        where: {
            email: payload.email
        }
    });
    const result = yield prisma_1.default.customer.create({
        data: payload
    });
    return result;
});
const getAllCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
const getCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });
    return result;
});
const updateCustomer = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId
        },
        data: payload
    });
    return result;
});
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    });
    const result = yield prisma_1.default.customer.delete({
        where: {
            customerId
        }
    });
    return result;
});
exports.CustomerServices = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
