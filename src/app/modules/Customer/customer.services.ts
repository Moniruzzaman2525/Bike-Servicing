
import prisma from "../../../helpers/prisma"
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

const getCustomerById = async (customerId: string) => {
    const result = await prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    })

    return result
}

const updateCustomer = async (customerId: string, payload: ICustomer) => {

    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId
        }
    })

    const result = await prisma.customer.update({
        where: {
            customerId
        },
        data: payload
    })
    return result
}



export const CustomerServices = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer
}
