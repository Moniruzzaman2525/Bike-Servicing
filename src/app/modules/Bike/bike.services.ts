import prisma from "../../../helpers/prisma"


const addANewBike = async(payload) => {
    const result = await prisma.bike.create({
        data: payload
    })

    return result
}


export const BikeServices = {
    addANewBike
}
