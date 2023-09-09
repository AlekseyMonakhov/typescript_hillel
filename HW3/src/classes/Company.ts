import { CompanyInterface } from '../types/Company';
import { DepartmentInterface } from '../types/departments/Department';
import { EmployeeInterface } from '../types/Employees/Employee';
import { InternInterface } from '../types/Employees/Intern';

export class Company implements CompanyInterface {
  constructor(
    public name: string,
    public employee: EmployeeInterface[],
    public departmentsList: DepartmentInterface[],
    public internsList: InternInterface[]
  ) {}
}
