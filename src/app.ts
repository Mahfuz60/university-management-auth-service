import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleWares/globalErrorHandler';
import { routes } from './app/routes';
import httpStatus from 'http-status';

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

//global error handler
app.use(globalErrorHandler);

//not found handler
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'NOT FOUND !',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API NOT FOUND!',
      },
    ],
  });
});

export default app;
