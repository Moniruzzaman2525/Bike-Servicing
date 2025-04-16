import prisma from "../../../helpers/prisma"
import { ICustomer } from "./customer.interface"


const createCustomer = async (payload: ICustomer) => {

    await prisma.customer.findUniqueOrThrow({
        where: {
            email: payload.email
        }
    })

    const result = await prisma.customer.create({
        data: payload
    })

    return result
}



export const CustomerServices = {
    createCustomer
}
