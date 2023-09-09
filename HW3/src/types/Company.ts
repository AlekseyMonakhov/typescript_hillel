import { DepartmentInterface } from './departments/Department';
import { EmployeeInterface } from './Employees/Employee';
import { InternInterface } from './Employees/Intern';

export interface CompanyInterface {
  name: string;
  departmentsList: DepartmentInterface[];
  internsList: InternInterface[];
  employee: EmployeeInterface[];
}
