

import express from 'express';
import { CustomerController } from './customer.controller';
import validateRequest from '../../middlewares/validateRequest';
import { customerValidation } from './customer.validation';

const router = express.Router();

router.post('/', validateRequest(customerValidation.create), CustomerController.createCustomer)

export const CustomerRoutes = router
