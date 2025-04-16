import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CustomerServices } from "./customer.services"
import httpStatus from "http-status";

const createCustomer = catchAsync(async (req, res) => {
    const customerData = req.body
    const result = await CustomerServices.createCustomer(customerData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin fetched successfully",
        data: result
    })
})


export const CustomerController = {
    createCustomer
}
