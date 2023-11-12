import {LIST_TYPE, TICKET_TYPE} from '../constants';
import {IObserver} from "./patterns";

export interface IZoo {
    buchgalteryDepartment: IBuchgalteryDepartment;
    adminDepartment: IAdminDepartment;
    casa: ICasa;
    marketingDepartment: IMarketingDepartment;
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

export interface IAnimal {
    readonly id: string;
    readonly type: string;
    name: string;
    age: number;
    health: string;
}


export interface IList {
    type: LIST_TYPE;
}

export interface IEmployee {
    readonly id: string;
    name: string;
    position: string;
    salary: number;

    receiveSalary(amount: number): void;
}

export interface ICasa {
    sellTicket(client: IBaseClient | IRegisterClient, ticketType: TICKET_TYPE): ITicket;

    closeShift(): number;
}


export interface ITicketPricesTable {
    getPrice(type: TICKET_TYPE): number;
}


export interface IAdminDepartment {

    addAnimal(animal: Omit<IAnimal, 'id'>): IAnimal

    updateAnimalInfo(id: string, animalInfo: Partial<Omit<IAnimal, 'id'>>): IAnimal | never

    removeAnimal(id: string): boolean | never

    addEmployee(employee: Omit<IEmployee, 'id' | 'receiveSalary'>): IEmployee

    updateEmployeeInfo(id: string, employeeInfo: Partial<Omit<IEmployee, 'id'>>): IEmployee | never

    removeEmployee(id: string): boolean | never
}

export interface IBuchgalteryDepartment {

    addIncome(income: number): number

    addOutcome(cost: number): number

    getCurrentBudjet(): number

    getIncomeReport(startDate: string, endDate: string): Map<string, number>

    getOutcomeReport(startDate: string, endDate: string): Map<string, number>

    getBudjetReport(startDate: string, endDate: string): Map<string, number>

    paySalaryById(id: string): number

    payAllSalary(): number
}

export interface IMarketingDepartment {
    sendEmail(email: string, message: string): void

    sendSMS(phone: string, message: string): void

    sendMessageToAllClients(message: string): void
}


export interface IBudjet {

    getIncome(): Map<string, number>;

    setIncome(income: number): void;

    getOutcome(): Map<string, number>;

    setOutcome(outcome: number): void;

    calcBudjet(): number;

    getBudjetHistory(): Map<string, number>;
}


export interface IManageCollection<T> {
    add(item: T): void;

    get(id: string): T | never;

    getAll(): Map<string, T>;

    update(id: string, itemInfo: Partial<T>): T | never;

    delete(id: string): boolean | never;

    clear(): void;
}
