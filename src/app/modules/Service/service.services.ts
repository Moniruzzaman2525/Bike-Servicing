
import prisma from "../../../helpers/prisma"
import { IService } from "./service.interface"
import AppError from "../../error/AppError"
import httpStatus from "http-status";

const createAServices = async (payload: IService) => {

    await prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: payload.bikeId
        }
    })

    const result = await prisma.serviceRecord.create({
        data: payload
    })

    return result
}

const getAllServices = async () => {
    const result = await prisma.serviceRecord.findMany()
    return result
}

const getServicesById = async (serviceId: string) => {
    const result = await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    })
    return result
}


const markServiceAsCompleted = async (serviceId: string, payload: any) => {
    await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        }
    })

    const result = await prisma.serviceRecord.update({
        where: {
            serviceId
        },
        data: {
            status: 'done',
            completionDate: payload.completionDate ? new Date(payload.completionDate) : new Date()  
        }
    })
    return result
}


const endingOrOverdueServices = async () => {
    const result = await prisma.serviceRecord.findMany({
        where: {
            status: { in: ['pending', 'in-progress'] },
            serviceDate: {
                lte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            }
        }
    });

    if (result.length === 0) {
        throw new AppError(httpStatus.BAD_REQUEST, "Pending or Overdue Services (older than 7 days) not found");
    }

    return result;
}



export const ServiceServices = {
    createAServices,
    getAllServices,
    getServicesById,
    markServiceAsCompleted,
    endingOrOverdueServices
}
