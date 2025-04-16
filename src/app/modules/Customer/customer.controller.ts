import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CustomerServices } from "./customer.services"
import httpStatus from "http-status";

const createCustomer = catchAsync(async (req, res) => {
    const customerData = req.body
    const result = await CustomerServices.createCustomer(customerData);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Customer created successfully",
        data: result
    })
})

const getAllCustomer = catchAsync(async (req, res) => {
    const result = await CustomerServices.getAllCustomer();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })
})

const getCustomerById = catchAsync(async (req, res) => {
    const result = await CustomerServices.getCustomerById(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result
    })
})


const updateCustomer = catchAsync(async (req, res) => {
    const result = await CustomerServices.getCustomerById(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result
    })
})


export const CustomerController = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer
}
