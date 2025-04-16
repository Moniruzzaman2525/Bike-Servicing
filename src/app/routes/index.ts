

import express from 'express';

const route = express.Router();

const moduleRoute = [
    {
        path: '/',
        route: 'route'
    },
]


moduleRoute.forEach(route => {
    route.use(route.path, route.route)
})

export default route
