import { LIST_TYPE, TICKET_TYPE } from '../constants';
import { IObserver } from "./patterns";
export interface IZoo {
    buchgalteryDepartment: IBuchgalteryDepartment;
    adminDepartment: IAdminDepartment;
    casa: ICasa;
}
export interface ICasa {
    sellTicket(client: IBaseClient | IRegisterClient, ticketType: TICKET_TYPE): void;
    closeShift(): number;
}
export interface IBaseClient {
    name: string;
    age: number;
    contacts: {
        phone: string;
        email?: string;
    };
}
export interface IRegisterClient extends IBaseClient, IObserver {
    readonly id: string;
    ticketsIds: Set<string>;
}
export interface ITicket {
    readonly id: string;
    type: TICKET_TYPE;
    price: number;
    clientId: string;
}
export interface ITicketPricesTable {
    getPrice(type: TICKET_TYPE): number;
}
export interface IList {
    type: LIST_TYPE;
}
export interface IAdminDepartment {
    addAnimal(animal: Omit<IAnimal, 'id'>): void;
    updateAnimalInfo(id: string, animalInfo: Partial<Omit<IAnimal, 'id'>>): IAnimal | never;
    removeAnimal(id: string): boolean | never;
    addEmployee(employee: Omit<IEmployee, 'id' | 'receiveSalary'>): void;
    updateEmployeeInfo(id: string, employeeInfo: Partial<Omit<IEmployee, 'id'>>): IEmployee | never;
    removeEmployee(id: string): boolean | never;
}
export interface IBuchgalteryDepartment {
    addIncome(income: number): void;
    addOutcome(cost: number): void;
    getCurrentBudjet(): number;
    getIncomeReport(startDate: number, endDate: number): Map<string, number>;
    getOutcomeReport(startDate: number, endDate: number): Map<string, number>;
    getBudjetReport(startDate: number, endDate: number): Map<string, number>;
}
export interface IAnimal {
    readonly id: string;
    readonly type: string;
    name: string;
    age: number;
    health: string;
}
export interface IEmployee {
    readonly id: string;
    name: string;
    position: string;
    salary: number;
    receiveSalary(amount: number): void;
}
export interface IBudjet {
    getIncome(): Map<number, number>;
    setIncome(income: number): void;
    getOutcome(): Map<number, number>;
    setOutcome(outcome: number): void;
    calcBudjet(): number;
    getBudjetHistory(): Map<number, number>;
}
export interface IManageCollection<T> {
    add(item: T): void;
    get(id: string): T | never;
    getAll(): Map<string, T>;
    update(id: string, itemInfo: Partial<T>): T | never;
    delete(id: string): boolean | never;
    clear(): void;
}
