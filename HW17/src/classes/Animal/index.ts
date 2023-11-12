import {IAnimal} from "../../types";
import {v4 as uuidv4} from 'uuid';

export class Animal implements IAnimal {
    readonly id = uuidv4();

    constructor(
        public type: string,
        public name: string,
        public age: number,
        public health: string) {
    }

}