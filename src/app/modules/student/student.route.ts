import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { StudentValidation } from './student.validation';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent
);
router.delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
