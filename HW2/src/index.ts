import { DIRECTIONS, LEVELS, SUBJECTS } from './constants';
import {
  AreaInterface,
  DirectionInterface,
  GroupInterface,
  LecturesInterface,
  LevelInterface,
  SchoolInerface,
  StudentInterface,
} from './types';

class Area implements AreaInterface {
  private _level: LevelInterface[] = [];

  get name(): string {
    return this._name;
  }

  get level(): LevelInterface[] {
    return this._level;
  }

  constructor(private _name: string) {}

  addLevel(level: LevelInterface): void {
    this._level.push(level);
  }

  removeLevel(level: LevelInterface): void {
    this._level = this._level.filter(levelItem => levelItem.name !== level.name);
  }
}

class School implements SchoolInerface {
  public directions: DIRECTIONS[] = [];
  private _areas: AreaInterface[] = [];
  private _lectures: LecturesInterface[] = [];

  get areas(): AreaInterface[] {
    return this._areas;
  }

  get lecturers(): LecturesInterface[] {
    return this._lectures;
  }

  addDirection(direction: DIRECTIONS): void {
    this.directions.push(direction);
  }

  addArea(area: AreaInterface): void {
    this._areas.push(area);
  }

  removeArea(area: AreaInterface): void {
    this._areas = this._areas.filter(areaItem => areaItem.name !== area.name);
  }

  addLecture(lecutre: LecturesInterface): void {
    this._lectures.push(lecutre);
  }

  removeLecture(lecture: LecturesInterface): void {
    this._lectures = this._lectures.filter(lectureItem => lectureItem !== lecture);
  }
}

class Direction implements DirectionInterface {
  levels: Array<LEVELS> = [];

  get name(): string {
    return this._name;
  }

  constructor(private _name: string) {}

  addLevel(level: LEVELS): void {
    this.levels.push(level);
  }
}

class Level implements LevelInterface {
  private _groups: Array<GroupInterface> = [];

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  constructor(
    private _name: string,
    private _program: string
  ) {}

  addGroup(group: GroupInterface): void {
    this._groups.push(group);
  }

  removeGroup(group: GroupInterface): void {
    this._groups = this._groups.filter(groupItem => groupItem !== group); //danger, need to add id to group
  }
}

class Group implements GroupInterface {
  private _students: Array<StudentInterface> = [];
  private _area: AreaInterface = new Area('AreaTest');
  private _status: string = '';

  get students(): Array<StudentInterface> {
    return this._students;
  }

  get area(): AreaInterface {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  constructor(
    public directionName: DIRECTIONS,
    public levelName: LEVELS
  ) {}

  addStudent(student: StudentInterface): void {
    this._students.push(student);
  }

  removeStudent(student: StudentInterface): void {
    this._students = this._students.filter(studentItem => studentItem.fullName !== student.fullName);
  }

  showPerformance(): Array<StudentInterface> {
    return [...this._students].sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
  }
}

class Student implements StudentInterface {
  private _grades: Record<SUBJECTS, number> = {
    [SUBJECTS.BACK_END]: 0,
    [SUBJECTS.CSHARP]: 0,
    [SUBJECTS.DEVOPS]: 0,
    [SUBJECTS.TYPESCRIPT]: 0,
    [SUBJECTS.FRONT_END]: 0,
  };

  private _visits: Record<string, boolean> = {};

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  constructor(
    private firstName: string,
    private lastName: string,
    private birthYear: number
  ) {}

  setGrade(subject: SUBJECTS, grade: number): void {
    this._grades[subject] = grade;
  }

  setVisit(lesson: string, isPresent: boolean): void {
    this._visits[lesson] = isPresent;
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values<number>(this._grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (Object.values(this._visits).filter(visit => !!visit).length / Object.keys(this._visits).length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
