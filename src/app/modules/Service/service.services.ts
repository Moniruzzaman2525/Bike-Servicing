import prisma from "../../../helpers/prisma"


const createAServices = async (payload: any) => {

    const result = await prisma.service.create({
        data: payload
    })

    return result
}

export const ServiceServices = {
    createAServices
}
