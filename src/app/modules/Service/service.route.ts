
import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { serviceValidation } from './service.validation';

const router = express.Router();

router.post('/', validateRequest(serviceValidation.create), ServiceController.createService)
router.get('/', ServiceController.getAllServices)
router.get('/:id', ServiceController.getServicesById)

export const ServiceRoutes = router
