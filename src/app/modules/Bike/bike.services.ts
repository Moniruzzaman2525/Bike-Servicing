import prisma from "../../../helpers/prisma"
import { IBike } from "./bike.interface"


const addANewBike = async (payload: IBike) => {

    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId: payload.customerId
        }
    })

    const result = await prisma.bike.create({
        data: payload
    })

    return result
}

const getAllBikes = async () => {
    const result = await prisma.bike.findMany()
    return result
}

export const BikeServices = {
    addANewBike,
    getAllBikes
}
