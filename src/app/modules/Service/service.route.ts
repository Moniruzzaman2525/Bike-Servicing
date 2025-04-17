
import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { serviceValidation } from './service.validation';

const router = express.Router();

router.post('/', validateRequest(serviceValidation.create), ServiceController.createService)


export const ServiceRoutes = router
