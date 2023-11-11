import {IEmployee, IManageCollection} from '../../types';
import {Singleton} from "../../decorators";


@Singleton
export class EmployeersCollection implements IManageCollection<IEmployee> {
    private collection: Map<string, IEmployee> = new Map();

    add(employee: IEmployee): void {
        this.collection.set(employee.id, employee);
    }

    get(id: string): IEmployee | never {
        if (!this.collection.has(id)) throw new Error('employee not found');

        return this.collection.get(id)!;
    }

    getAll(): Map<string, IEmployee> {
        return this.collection;
    }

    delete(id: string): boolean | never {
        if (!this.collection.has(id)) throw new Error('employee not found');

        return this.collection.delete(id);
    }

    update(id: string, employeeInfo: Partial<IEmployee>): IEmployee | never {
        if (!this.collection.has(id)) throw new Error('employee not found');

        const employee = this.collection.get(id)!;
        const updatedEmployeers = {...employee, ...employeeInfo};

        this.collection.set(id, updatedEmployeers);

        return updatedEmployeers;
    }

    clear() {
        this.collection.clear();
    }
}
