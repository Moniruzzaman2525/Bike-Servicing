

import express from 'express';
import { CustomerController } from './customer.controller';
import validateRequest from '../../middlewares/validateRequest';
import { customerValidation } from './customer.validation';

const router = express.Router();

router.post('/', validateRequest(customerValidation.create), CustomerController.createCustomer)
router.get('/', CustomerController.getAllCustomer)
router.get('/:id', CustomerController.getCustomerById)
router.put('/:id', validateRequest(customerValidation.update), CustomerController.updateCustomer)
router.delete('/:id', CustomerController.deleteCustomer)

export const CustomerRoutes = router
