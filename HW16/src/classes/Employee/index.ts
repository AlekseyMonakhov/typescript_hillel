import {IEmployee} from "../../types";
import {v4 as uuidv4} from 'uuid';

export class Employee implements IEmployee {
    readonly id: string = uuidv4();

    constructor(
        public name: string,
        public position: string,
        public salary: number
    ) {
    }

    receiveSalary(amount: number) {
        console.log('received salary: ', amount, 'UAH')
    }
}