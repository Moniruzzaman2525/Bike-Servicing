import catchAsync from "../../../shared/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";
import { BikeServices } from "./bike.services";


const addANewBike = catchAsync(async (req, res) => {
    const customerData = req.body
    const result = await BikeServices.addANewBike(customerData);
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
