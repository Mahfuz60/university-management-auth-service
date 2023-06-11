import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middleWares/globalErrorHandler';
import { routes } from './app/routes';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Router
app.use('/api/v1/', routes);

//testing route

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection!'))

//   // next('server side error!') //error
// })

app.use(globalErrorHandler);

export default app;
