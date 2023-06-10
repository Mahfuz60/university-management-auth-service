import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middleWares/validateRequest';
import { userValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  UserController.createUser
);

export const UserRoutes = router;
