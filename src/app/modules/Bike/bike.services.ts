import prisma from "../../../helpers/prisma"
import { IBike } from "./bike.interface"


const addANewBike = async(payload: IBike) => {
    const result = await prisma.bike.create({
        data: payload
    })

    return result
}


export const BikeServices = {
    addANewBike
}
