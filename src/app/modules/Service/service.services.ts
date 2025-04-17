import { ServiceStatus } from "@prisma/client"
import prisma from "../../../helpers/prisma"
import { IService } from "./service.interface"


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


const markServiceAsCompleted = async (serviceId: string, payload: string) => {
    const result = await prisma.serviceRecord.update({
        where: {
            serviceId
        },
        data: {
            status: ServiceStatus.DONE,
            completionDate: new Date(payload)
        }
    })
    return result
}

export const ServiceServices = {
    createAServices,
    getAllServices,
    getServicesById,
    markServiceAsCompleted
}
