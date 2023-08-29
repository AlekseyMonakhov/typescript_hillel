

class School {
  
    directions: string[] = [];

    addDirection(direction: string) {
        this.directions.push(direction);
    }

}

class Direction {
    levels: Array<string> = [];
    _name: string;

    get name() {
        return this._name;
    }

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: string) {
        this.levels.push(level);
    }
}

class Level {
    groups: Array<string> = [];
    _name: string;
    _program: string;

    constructor(name: string, program: string) {
        this._name = name;
        this._program = program;
    }

    get name() {
        return this._name;
    }

    get program() {
        return this._program;
    }

    addGroup(group: string) {
        this.groups.push(group);
    }
}

interface Student {
    getPerformanceRating(): number;
}

class Group {
    _students: Array<Student> = [];
    directionName: string;
    levelName: string;

    get students() {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    addStudent(student: Student) {
        this._students.push(student);
    }

    showPerformance() {
        const sortedStudents = this._students.sort(
            (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
        );

        return sortedStudents;
    }
}

class Student {
    grades = {};
    attendance: string[] = [];
    firstName: string;
    lastName: string;
    birthYear: number;

    constructor(firstName: string, lastName: string, birthYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: string, grade: number) {
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
            (this.attendance.filter((present) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
