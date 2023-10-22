import { IUser } from '../types';
export declare class User implements IUser {
    name: string;
    readonly id: string;
    constructor(name: string);
}
