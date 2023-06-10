/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import config from '../../config';
import { IGenericErrorMessage } from '../../interfaces/errors';
import handleValidationError from '../../errors/handleValidationError';
import ApiError from '../../errors/ApiError';
import { errorLogger } from '../../shared/logger';
import { ZodError } from 'zod';
import handleZodError from '../../errors/handleZodError';

//Global Error Handler
const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env == 'development'
    ? console.log('🧨 globalErrorHandler~~', error)
    : errorLogger.error('🧨 globalErrorHandler~~', error);

  let statusCode = 500;
  let message = 'Somethings went wrong!';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidatorError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    (message = error?.message),
      (errorMessages = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : []);
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    (statusCode = simplifiedError.statusCode),
      (message = simplifiedError.message),
      (errorMessages = simplifiedError.errorMessages);
  } else if (error instanceof Error) {
    (message = error?.message),
      (errorMessages = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : []);
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
  next();
};

export default globalErrorHandler;
