import catchAsync from "../../../shared/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";
import { BikeServices } from "./bike.services";


const addANewBike = catchAsync(async (req, res) => {
    const bikeData = req.body
    const result = await BikeServices.addANewBike(bikeData);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Bike added successfully",
        data: result
    })
})

const getAllBikes = catchAsync(async (req, res) => {
    const result = await BikeServices.getAllBikes()
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Bikes fetched successfully",
        data: result
    })
})


export const BikeController = {
    addANewBike,
    getAllBikes
}
