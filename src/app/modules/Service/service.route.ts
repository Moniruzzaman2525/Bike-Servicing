
import express from 'express';
import { ServiceController } from './service.controller';

const router = express.Router();

router.post('/', ServiceController.createService)


export const ServiceRoutes = router
