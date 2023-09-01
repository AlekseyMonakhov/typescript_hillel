import {DIRECTIONS, LEVELS} from "../constants";

export interface SchoolInerface {
    directions: DIRECTIONS[],

    addDirection(direction: DIRECTIONS): void,
}

export interface DirectionInterface {
    levels: LEVELS[],
    name: string,

    addLevel(level: LEVELS): void
}


export interface LevelInterface {
    name: string,
    program:string,
    addGroup(group: GroupInterface):void
}

export interface GroupInterface {
    students: Array<StudentInterface>,

    addStudent(student: StudentInterface): void,

    showPerformance(): Array<StudentInterface>,
}

export interface StudentInterface {
    grades: Record<string, number>,
    attendance: string[],
    fullName: string,
    age: number,

    setGrade(subject: string, grade: number): void,

    markAttendance(present: string): void,

    getPerformanceRating(): number;
}