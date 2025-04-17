import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceServices } from "./service.services";
import httpStatus from "http-status";


const createService = catchAsync(async (req, res) => {
    const servicesData = req.body
    const result = await ServiceServices.createAServices(servicesData);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result
    })
})



export const ServiceController = {
    createService,
}
