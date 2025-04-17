

import express from 'express';
import { CustomerRoutes } from '../modules/Customer/customer.route';
import { BikeRoutes } from '../modules/Bike/bike.route';

const router = express.Router();

const modulesRoute = [
    {
        path: '/customers',
        route: CustomerRoutes
    },
    {
        path: '/bikes',
        route: BikeRoutes
    },
]


modulesRoute.forEach(route => {
    router.use(route.path, route.route)
})
export default router
