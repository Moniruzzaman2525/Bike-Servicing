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

export const ServiceServices = {
    createAServices
}
