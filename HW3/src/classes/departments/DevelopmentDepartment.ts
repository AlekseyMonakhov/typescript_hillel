import { DEPARTMENTS } from '../../constants/Departments';
import { CompanyMemberInterface } from '../../types/Employees/CompanyMember';
import { DevelopmentDepartmentInterface } from '../../types/departments/DevelopmentDepartmentInterface';
import { Department } from './Department';

export class DevelopmentDepartment extends Department implements DevelopmentDepartmentInterface {
  constructor(
    public budjet: number,
    public credit: number,
    public debit: number,
    public domainArea: string,
    public membersList: CompanyMemberInterface[],
    public name: DEPARTMENTS
  ) {
    super(budjet, credit, debit, domainArea, membersList, name);
  }

  getBalance(): number {
    return this.budjet;
  }
}
