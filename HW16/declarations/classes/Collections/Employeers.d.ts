import { IEmployee, IManageCollection } from '../../types';
export declare class EmployeersCollection implements IManageCollection<IEmployee> {
    private collection;
    add(employee: IEmployee): void;
    get(id: string): IEmployee | never;
    getAll(): Map<string, IEmployee>;
    delete(id: string): boolean | never;
    update(id: string, employeeInfo: Partial<IEmployee>): IEmployee | never;
    clear(): void;
}
