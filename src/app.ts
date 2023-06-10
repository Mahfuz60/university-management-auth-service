import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middleWares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application Router
app.use('/api/v1/users/', UserRoutes);

//testing route

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection!'))

//   // next('server side error!') //error
// })

app.use(globalErrorHandler);

export default app;
