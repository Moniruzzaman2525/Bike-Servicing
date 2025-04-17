import { ServiceStatus } from "@prisma/client"
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

    if (!payload.completionDate) {
        throw new AppError(httpStatus.BAD_REQUEST, "Completion date is required")

    }


    const result = await prisma.serviceRecord.update({
        where: {
            serviceId
        },
        data: {
            status: ServiceStatus.DONE,
            completionDate: new Date(payload.completionDate)
        }
    })
    return result
}


const endingOrOverdueServices = async () => {
    const result = await prisma.serviceRecord.findMany({
        where: {
            status: ServiceStatus.PENDING || ServiceStatus.IN_PROGRESS,
            serviceDate: {
                lte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            }
        }
    })

    return result
}


export const ServiceServices = {
    createAServices,
    getAllServices,
    getServicesById,
    markServiceAsCompleted,
    endingOrOverdueServices
}
