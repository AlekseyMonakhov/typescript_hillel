import {AnimalCollection} from "../Collections/Animal";
import {EmployeersCollection} from "../Collections/Employeers";
import {Singleton} from "../../decorators";
import {IAdminDepartment, IAnimal, IBuchgalteryDepartment, IEmployee} from "../../types";
import {Budjet} from "../Budjet";
import {Employee} from "../Employee";
import {Animal} from "../Animal";


@Singleton
export class AdminDepartment implements IAdminDepartment {
    private animalsCollection = new AnimalCollection();
    private employeesCollection = new EmployeersCollection();

    addAnimal(animal: Omit<IAnimal, 'id'>): void {
        const newAnimal = new Animal(animal.type, animal.name, animal.age, animal.health);
        this.animalsCollection.add(newAnimal);
    }

    updateAnimalInfo(id: string, animalInfo: Partial<Omit<IAnimal, 'id'>>): IAnimal | never {
        return this.animalsCollection.update(id, animalInfo);
    }

    removeAnimal(id: string): boolean | never {
        return this.animalsCollection.delete(id);
    }

    addEmployee(employee: Omit<IEmployee, 'id' | 'receiveSalary'>): void {
        const newEmployee = new Employee(employee.name, employee.position, employee.salary);
        this.employeesCollection.add(newEmployee);
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
    private budjet = new Budjet();
    private employeesCollection = new EmployeersCollection();

    addIncome(income: number): void {
        this.budjet.setIncome(income);
    }

    addOutcome(cost: number): void {
        this.budjet.setOutcome(cost)
    }

    getCurrentBudjet(): number {
        return this.budjet.calcBudjet();
    }

    getIncomeReport(startDate: number, endDate: number): Map<string, number> {
        const incomeReport = new Map<string, number>();
        const incomeHistory = this.budjet.getIncome();

        for (const [date, income] of incomeHistory) {
            if (date >= startDate && date <= endDate) {
                incomeReport.set(new Date(date).toLocaleDateString(), income);
            }
        }

        return incomeReport;
    }

    getOutcomeReport(startDate: number, endDate: number): Map<string, number> {
        const outcomeReport = new Map<string, number>();
        const outcomeHistory = this.budjet.getOutcome()

        for (const [date, income] of outcomeHistory) {
            if (date >= startDate && date <= endDate) {
                outcomeReport.set(new Date(date).toLocaleDateString(), income);
            }
        }

        return outcomeReport;
    }

    getBudjetReport(startDate: number, endDate: number): Map<string, number> {
        const budjetReport = new Map<string, number>();
        const budjetHistory = this.budjet.getBudjetHistory();

        for (const [date, income] of budjetHistory) {
            if (date >= startDate && date <= endDate) {
                budjetReport.set(new Date(date).toLocaleDateString(), income);
            }
        }

        return budjetReport;
    }

    paySalaryById(employeeId: string): void {
        const employee = this.employeesCollection.get(employeeId);
        const salary = employee.salary;

        this.budjet.setOutcome(salary);
        employee.receiveSalary(salary);
    }

    payAllSalary(): void {
        const employees = this.employeesCollection.getAll().values();

        for (const employee of employees) {
            this.paySalaryById(employee.id);
        }
    }


}