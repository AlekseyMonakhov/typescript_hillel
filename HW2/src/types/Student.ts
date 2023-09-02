import { SUBJECTS } from '../constants';

export interface StudentInterface {
  fullName: string;

  setGrade(subject: SUBJECTS, grade: number): void;

  setVisit(lesson: string, isPresent: boolean): void;

  getPerformanceRating(): number;
}
