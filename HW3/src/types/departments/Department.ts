import { DEPARTMENTS } from '../../constants/Departments';
import { CompanyMemberInterface } from '../Employees/CompanyMember';
import { EmployeeInterface } from '../Employees/Employee';

export interface DepartmentInterface {
  name: DEPARTMENTS;
  id: string;
  domainArea: string;
  membersList: CompanyMemberInterface[];
  debit: number;
  credit: number;
  budjet: number;

  addMember(member: EmployeeInterface): void;

  removeMember(member: EmployeeInterface): void;
}
