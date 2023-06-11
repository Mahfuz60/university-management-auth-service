import ApiError from '../../../errors/ApiError';
import { academicSemesterCodesTitleMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import httpStatus from 'http-status';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  //validation semester title and semester code

  if (academicSemesterCodesTitleMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'InValid Semester Code!');
  }

  const result = await AcademicSemester.create(payload);

  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
