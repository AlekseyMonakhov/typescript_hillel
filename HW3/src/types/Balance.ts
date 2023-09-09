import { CompanyMemberInterface } from './Employees/CompanyMember';
import { InternInterface } from './Employees/Intern';
import { DepartmentInterface } from './departments/Department';

export interface BalanceInterface {
  departments: DepartmentInterface[];
  employees: (CompanyMemberInterface | InternInterface)[];
}
