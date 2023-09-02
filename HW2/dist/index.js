"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Area {
    _name;
    _level = [];
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    constructor(_name) {
        this._name = _name;
    }
    addLevel(level) {
        this._level.push(level);
    }
    removeLevel(level) {
        this._level = this._level.filter(levelItem => levelItem.name !== level.name);
    }
}
class School {
    directions = [];
    _areas = [];
    _lectures = [];
    get areas() {
        return this._areas;
    }
    get lecturers() {
        return this._lectures;
    }
    addDirection(direction) {
        this.directions.push(direction);
    }
    addArea(area) {
        this._areas.push(area);
    }
    removeArea(area) {
        this._areas = this._areas.filter(areaItem => areaItem.name !== area.name);
    }
    addLecture(lecutre) {
        this._lectures.push(lecutre);
    }
    removeLecture(lecture) {
        this._lectures = this._lectures.filter(lectureItem => lectureItem.name !== lecture.name);
    }
}
class Direction {
    _name;
    levels = [];
    get name() {
        return this._name;
    }
    constructor(_name) {
        this._name = _name;
    }
    addLevel(level) {
        this.levels.push(level);
    }
}
class Level {
    _name;
    _program;
    _groups = [];
    get name() {
        return this._name;
    }
    get program() {
        return this._program;
    }
    constructor(_name, _program) {
        this._name = _name;
        this._program = _program;
    }
    addGroup(group) {
        this._groups.push(group);
    }
    removeGroup(group) {
        this._groups = this._groups.filter(groupItem => groupItem !== group); //danger, need to add id to group
    }
}
class Group {
    directionName;
    levelName;
    _students = [];
    _area = new Area('AreaTest');
    _status = '';
    get students() {
        return this._students;
    }
    get area() {
        return this._area;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    constructor(directionName, levelName) {
        this.directionName = directionName;
        this.levelName = levelName;
    }
    addStudent(student) {
        this._students.push(student);
    }
    removeStudent(student) {
        this._students = this._students.filter(studentItem => studentItem.fullName !== student.fullName);
    }
    showPerformance() {
        return [...this._students].sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }
}
class Student {
    _firstName;
    _lastName;
    _birthYear;
    _grades = {
        ["BACK_END" /* SUBJECTS.BACK_END */]: 0,
        ["CSHARP" /* SUBJECTS.CSHARP */]: 0,
        ["DEVOPS" /* SUBJECTS.DEVOPS */]: 0,
        ["TYPESCRIPT" /* SUBJECTS.TYPESCRIPT */]: 0,
        ["FRONT_END" /* SUBJECTS.FRONT_END */]: 0,
    };
    _visits = [];
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(value) {
        [this._lastName, this._firstName] = value.split(' ');
    }
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    constructor(_firstName, _lastName, _birthYear) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._birthYear = _birthYear;
    }
    setGrade(subject, grade) {
        this._grades[subject] = grade;
    }
    setVisit(lesson, isPresent) {
        this._visits.push([lesson, isPresent]);
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this._grades);
        if (gradeValues.length === 0)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (this._visits.filter(el => !!el[1]).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
