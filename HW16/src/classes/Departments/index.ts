import {AnimalCollection} from "../Collections/Animal";
import {EmployeersCollection} from "../Collections/Employeers";
import {Singleton} from "../../decorators";
import {
    IAdminDepartment,
    IAnimal,
    IBuchgalteryDepartment,
    IEmployee,
    IMarketingDepartment
} from "../../types";
import {Budjet} from "../Budjet";
import {Employee} from "../Employee";
import {Animal} from "../Animal";
import {ClientCollection} from "../Collections/Clients";


export function parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split(".");
    return new Date(`${year}-${month}-${day}`);
}

@Singleton
export class AdminDepartment implements IAdminDepartment {
    private animalsCollection = new AnimalCollection();
    private employeesCollection = new EmployeersCollection();

    addAnimal(animal: Omit<IAnimal, 'id'>): IAnimal {
        const newAnimal = new Animal(animal.type, animal.name, animal.age, animal.health);
        this.animalsCollection.add(newAnimal);

        return newAnimal;
    }

    updateAnimalInfo(id: string, animalInfo: Partial<Omit<IAnimal, 'id'>>): IAnimal | never {
        return this.animalsCollection.update(id, animalInfo);
    }

    removeAnimal(id: string): boolean | never {
        return this.animalsCollection.delete(id);
    }

    addEmployee(employee: Omit<IEmployee, 'id' | 'receiveSalary'>): IEmployee {
        const newEmployee = new Employee(employee.name, employee.position, employee.salary);
        this.employeesCollection.add(newEmployee);

        return newEmployee;
    }

    updateEmployeeInfo(id: string, employeeInfo: Partial<IEmployee>): IEmployee | never {
        return this.employeesCollection.update(id, employeeInfo);
    }

    removeEmployee(id: string): boolean | never {
        return this.employeesCollection.delete(id);
    }
}

@Singleton
export class BuchgalteryDepartment implements IBuchgalteryDepartment {
    private static readonly INCOME = 'income';
    private static readonly OUTCOME = 'outcome';
    private static readonly BUDJET = 'budjet';

    private budjet = new Budjet();
    private employeesCollection = new EmployeersCollection();

    private calculate(arr: number[]): number {
        return arr.reduce((acc, item) => acc + item, 0);
    }

    private getReport(startDate: string, endDate: string, reportType: string): Map<string, number> {
        let history: Map<string, number>;
        switch (reportType) {
            case BuchgalteryDepartment.INCOME:
                history = this.budjet.getIncome();
                break;
            case BuchgalteryDepartment.OUTCOME:
                history = this.budjet.getOutcome();
                break;
            case BuchgalteryDepartment.BUDJET:
                history = this.budjet.getBudjetHistory();
                break;
            default:
                throw new Error('Invalid report type');
        }

        const report = new Map<string, number>();
        for (const [date, value] of history) {
            if (parseDate(date) >= parseDate(startDate) && parseDate(date) <= parseDate(endDate)) {
                report.set(date, value);
            }
        }

        return report;
    }

    addIncome(income: number): number {
        this.budjet.setIncome(income);

        return this.calculate(Array.from(this.budjet.getIncome().values()));
    }

    addOutcome(cost: number): number {
        this.budjet.setOutcome(cost)

        return this.calculate(Array.from(this.budjet.getOutcome().values()));
    }

    getCurrentBudjet(): number {
        return this.budjet.calcBudjet();
    }

    getIncomeReport(startDate: string, endDate: string): Map<string, number> {
        return this.getReport(startDate, endDate, BuchgalteryDepartment.INCOME);
    }

    getOutcomeReport(startDate: string, endDate: string): Map<string, number> {
        return this.getReport(startDate, endDate, BuchgalteryDepartment.OUTCOME);
    }

    getBudjetReport(startDate: string, endDate: string): Map<string, number> {
        return this.getReport(startDate, endDate, BuchgalteryDepartment.BUDJET);
    }

    paySalaryById(employeeId: string): number {
        const employee = this.employeesCollection.get(employeeId);
        const salary = employee.salary;

        this.budjet.setOutcome(salary);
        employee.receiveSalary(salary);

        return salary;
    }

    payAllSalary(): number {
        const employees = this.employeesCollection.getAll().values();
        const salaries: number[] = [];

        for (const employee of employees) {
            salaries.push(this.paySalaryById(employee.id));
        }

        return this.calculate(salaries);
    }

    resetBudjetHistory(): void {
        this.budjet.resetHistory();
    }
}

@Singleton
export class MarketingDepartment implements IMarketingDepartment {
    private clientsCollection = new ClientCollection();


    sendEmail(email: string, message: string): void {
        console.log(`Email was sent to ${email} with message: ${message}`);
    }

    sendSMS(phone: string, message: string): void {
        console.log(`Email was sent to ${phone} with message: ${message}`);
    }

    sendMessageToAllClients(message: string): void {
        const clients = this.clientsCollection.getAll().values();

        for (const client of clients) {
            if (client.contacts.email) {
                this.sendEmail(client.contacts.email, message);
                continue;
            }

            this.sendSMS(client.contacts.phone, message);
        }
    }

}