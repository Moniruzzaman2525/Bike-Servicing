import express from 'express'
import { BikeController } from './bike.controller'
import validateRequest from '../../middlewares/validateRequest'
import { bikeValidation } from './bike.validation'

const router = express.Router()

router.post('/', validateRequest(bikeValidation.bikeSchema), BikeController.addANewBike)

export const BikeRoutes = router
