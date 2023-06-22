import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/errors';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id!',
    },
  ];

  return {
    statusCode: 400,
    message: 'MongoDB Cast Error!',
    errorMessages: errors,
  };
};

export default handleCastError;
