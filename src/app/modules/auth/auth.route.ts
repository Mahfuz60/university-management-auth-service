import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';
import authGuard from '../../middleWares/authGuard';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshZodSchema),
  AuthController.refreshToken
);
router.post(
  '/change-password',
  validateRequest(AuthValidation.changePasswordZodSchema),
  authGuard(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),

  AuthController.changePassword
);

export const AuthRoutes = router;
