import {DIRECTIONS, LEVELS, SUBJECTS} from "./constants";
import {
    DirectionInterface,
    GroupInterface,
    LevelInterface,
    SchoolInerface,
    StudentInterface
} from "./types";


class School implements SchoolInerface {
    directions: DIRECTIONS[] = [];

    addDirection(direction: DIRECTIONS) {
        this.directions.push(direction);
    }
}

class Direction implements DirectionInterface {
    levels: Array<LEVELS> = [];

    get name(): string {
        return this._name;
    }

    constructor(private _name: string) {
    }

    addLevel(level: LEVELS): void {
        this.levels.push(level);
    }
}

class Level implements LevelInterface {
    groups: Array<GroupInterface> = [];

    constructor(private _name: string, private _program: string) {
    }

    get name(): string {
        return this._name;
    }

    get program() {
        return this._program;
    }

    addGroup(group: GroupInterface) {
        this.groups.push(group);
    }
}

class Group implements GroupInterface {
    private _students: Array<StudentInterface> = [];

    get students() {
        return this._students;
    }

    constructor(public directionName: string, public levelName: string) {
    }

    addStudent(student: StudentInterface) {
        this._students.push(student);
    }

    showPerformance() {
        return [...this._students].sort(
            (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
        );
    }
}

class Student implements StudentInterface {
    public grades: Record<SUBJECTS, number> = {
        [SUBJECTS.BACK_END] : 0,
        [SUBJECTS.CSHARP]: 0,
        [SUBJECTS.DEVOPS]: 0,
        [SUBJECTS.TYPESCRIPT]: 0,
        [SUBJECTS.FRONT_END]: 0,
    };

    attendance: string[] = [];

    constructor(
        public firstName: string,
        public lastName: string,
        public birthYear: number
    ) {
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: SUBJECTS, grade: number): void {
        this.grades[subject] = grade;
    }

    markAttendance(present: string) {
        this.attendance.push(present);
    }

    getPerformanceRating() {
        const gradeValues = Object.values<number>(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade =
            gradeValues.reduce((sum, grade) => sum + grade, 0) /
            gradeValues.length;

        const attendancePercentage =
            (this.attendance.filter((present) => present).length / this.attendance.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
