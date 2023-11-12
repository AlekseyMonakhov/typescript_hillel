import { IRegisterClient } from '../../types';
export declare class RegisteredClient implements IRegisterClient {
    name: string;
    age: number;
    contacts: {
        phone: string;
        email?: string;
    };
    readonly id: string;
    ticketsIds: Set<string>;
    constructor(name: string, age: number, contacts: {
        phone: string;
        email?: string;
    });
    update(message: string): void;
}
