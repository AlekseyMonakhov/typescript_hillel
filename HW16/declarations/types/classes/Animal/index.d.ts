import { IAnimal } from "../../types";
export declare class Animal implements IAnimal {
    type: string;
    name: string;
    age: number;
    health: string;
    readonly id: string;
    constructor(type: string, name: string, age: number, health: string);
}
