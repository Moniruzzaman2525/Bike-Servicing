
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';

const app: Application = express();
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello from server' })
})
app.use(express.json())
app.use(cors())

app.use('/api', router)
app.use(globalErrorHandler)
app.use(notFound);



export default app;
