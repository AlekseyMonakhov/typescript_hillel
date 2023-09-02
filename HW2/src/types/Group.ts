import { AreaInterface } from './Area';
import { DIRECTIONS, LEVELS } from '../constants';
import { StudentInterface } from './Student';

export interface GroupInterface {
  students: Array<StudentInterface>;
  area: AreaInterface;
  status: string;

  directionName: DIRECTIONS;
  levelName: LEVELS;

  addStudent(student: StudentInterface): void;
  removeStudent(student: StudentInterface): void;

  showPerformance(): Array<StudentInterface>;
}
