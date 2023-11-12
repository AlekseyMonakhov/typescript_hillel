import { IEmployee } from "../../types";
export declare class Employee implements IEmployee {
    name: string;
    position: string;
    salary: number;
    readonly id: string;
    constructor(name: string, position: string, salary: number);
    receiveSalary(amount: number): void;
}
