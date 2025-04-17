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

const getAllServices = catchAsync(async (req, res) => {
    const result = await ServiceServices.getAllServices();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result
    })
})

const getServicesById = catchAsync(async (req, res) => {
    const result = await ServiceServices.getServicesById(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result
    })
})

const markServiceAsCompleted = catchAsync(async (req, res) => {
    const result = await ServiceServices.markServiceAsCompleted(req.params.id, req.body.completionDate)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service marked as completed",
        data: result
    })
})

const endingOrOverdueServices = catchAsync(async (req, res) => {
    const result = await ServiceServices.endingOrOverdueServices()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result
    })
})

export const ServiceController = {
    createService,
    getAllServices,
    getServicesById,
    markServiceAsCompleted,
    endingOrOverdueServices
}
