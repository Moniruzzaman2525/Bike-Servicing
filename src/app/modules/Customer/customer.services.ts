
import prisma from "../../../helpers/prisma"
import { badRequestError } from "../../../utils/errorUtils";
import { ICustomer } from "./customer.interface"


const createCustomer = async (payload: ICustomer) => {

    await prisma.customer.findUnique({
        where: {
            email: payload.email
        }
    })
    const result = await prisma.customer.create({
        data: payload
    })

    return result
}

const getAllCustomer = async () => {
    const result = await prisma.customer.findMany()
    return result
}

export const CustomerServices = {
    createCustomer,
    getAllCustomer
}
