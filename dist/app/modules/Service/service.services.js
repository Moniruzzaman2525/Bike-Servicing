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
exports.ServiceServices = void 0;
const prisma_1 = __importDefault(require("../../../helpers/prisma"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createAServices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.bike.findUniqueOrThrow({
        where: {
            bikeId: payload.bikeId
        }
    });
    const result = yield prisma_1.default.serviceRecord.create({
        data: payload
    });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const getServicesById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    });
    return result;
});
const markServiceAsCompleted = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    });
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId
        },
        data: {
            status: 'done',
            completionDate: (payload === null || payload === void 0 ? void 0 : payload.completionDate) ? new Date(payload.completionDate) : new Date()
        }
    });
    return result;
});
const endingOrOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: { in: ['pending', 'in-progress'] },
            serviceDate: {
                lte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            }
        }
    });
    if (result.length === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Pending or Overdue Services (older than 7 days) not found");
    }
    return result;
});
exports.ServiceServices = {
    createAServices,
    getAllServices,
    getServicesById,
    markServiceAsCompleted,
    endingOrOverdueServices
};
