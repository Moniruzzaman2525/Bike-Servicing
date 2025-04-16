

import express from 'express';
import { CustomerRoutes } from '../modules/Customer/customer.route';

const router = express.Router();

const modulesRoute = [
    {
        path: '/customers',
        route: CustomerRoutes
    },
]


modulesRoute.forEach(route => {
    router.use(route.path, route.route)
})
export default router
