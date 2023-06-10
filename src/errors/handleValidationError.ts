import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/errors';
import { IGenericErrorResponse } from '../interfaces/common';

const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );

  return {
    statusCode: 400,
    message: 'Validation Error!',
    errorMessages: errors,
  };
};

export default handleValidationError;
