import { DIRECTIONS } from '../constants';
import { AreaInterface } from './Area';
import { LecturesInterface } from './Lecture';

export interface SchoolInerface {
  directions: DIRECTIONS[];

  areas: AreaInterface[];
  lecturers: LecturesInterface[];

  addDirection(direction: DIRECTIONS): void;

  addArea(area: AreaInterface): void;
  removeArea(area: AreaInterface): void;

  addLecture(lecutre: LecturesInterface): void;
  removeLecture(lecture: LecturesInterface): void;
}
