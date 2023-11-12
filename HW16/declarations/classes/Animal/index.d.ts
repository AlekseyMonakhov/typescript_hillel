import { IAnimal } from "../../types";
export declare class Animal implements IAnimal {
    type: string;
    name: string;
    age: number;
    health: string;
    readonly id: any;
    constructor(type: string, name: string, age: number, health: string);
}
