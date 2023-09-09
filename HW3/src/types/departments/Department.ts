import { DEPARTMENTS } from '../../constants/Departments';
import { Budjet } from '../Budjet';
import { CompanyMemberInterface } from '../Employees/CompanyMember';
import { EmployeeInterface } from '../Employees/Employee';

export interface DepartmentInterface {
  name: DEPARTMENTS;
  id: string;
  domainArea: string;
  membersList: CompanyMemberInterface[];
  budjet: Budjet;

  addMember(member: EmployeeInterface): void;

  removeMember(member: EmployeeInterface): void;
}
