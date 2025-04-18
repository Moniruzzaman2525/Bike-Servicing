
import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { serviceValidation } from './service.validation';

const router = express.Router();

router.post('/', validateRequest(serviceValidation.create), ServiceController.createService)
router.get('/', ServiceController.getAllServices)
router.get('/status', ServiceController.endingOrOverdueServices)
router.get('/:id', ServiceController.getServicesById)
router.put('/:id/complete', ServiceController.markServiceAsCompleted)


export const ServiceRoutes = router
