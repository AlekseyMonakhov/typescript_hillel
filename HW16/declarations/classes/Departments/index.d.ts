import { IAdminDepartment, IAnimal, IBuchgalteryDepartment, IEmployee, IMarketingDepartment } from "../../types";
export declare class AdminDepartment implements IAdminDepartment {
    private animalsCollection;
    private employeesCollection;
    addAnimal(animal: Omit<IAnimal, 'id'>): void;
    updateAnimalInfo(id: string, animalInfo: Partial<Omit<IAnimal, 'id'>>): IAnimal | never;
    removeAnimal(id: string): boolean | never;
    addEmployee(employee: Omit<IEmployee, 'id' | 'receiveSalary'>): void;
    updateEmployeeInfo(id: string, employeeInfo: Partial<IEmployee>): IEmployee | never;
    removeEmployee(id: string): boolean | never;
}
export declare class BuchgalteryDepartment implements IBuchgalteryDepartment {
    private budjet;
    private employeesCollection;
    addIncome(income: number): void;
    addOutcome(cost: number): void;
    getCurrentBudjet(): number;
    getIncomeReport(startDate: string, endDate: string): Map<string, number>;
    getOutcomeReport(startDate: string, endDate: string): Map<string, number>;
    getBudjetReport(startDate: string, endDate: string): Map<string, number>;
    paySalaryById(employeeId: string): void;
    payAllSalary(): void;
}
export declare class MarketingDepartment implements IMarketingDepartment {
    private clientsCollection;
    sendEmail(email: string, message: string): void;
    sendSMS(phone: string, message: string): void;
    sendMessageToAllClients(message: string): void;
}
