
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(express.json())
app.use(cors())

app.use('/api/v1', router)
app.use(globalErrorHandler)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello from server' })
})


export default app;
