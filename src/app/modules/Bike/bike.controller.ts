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
        message: "Customer created successfully",
        data: result
    })
})


export const BikeController = {
    addANewBike
}
