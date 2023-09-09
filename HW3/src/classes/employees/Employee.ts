import { EmployeeInterface } from '../../types/Employees/Employee';

export class Employee implements EmployeeInterface {
  id: string = (Math.random() + 1).toString(36);
  constructor(
    public firstName: string,
    public lastName: string,
    public sallary: number
  ) {}
}
