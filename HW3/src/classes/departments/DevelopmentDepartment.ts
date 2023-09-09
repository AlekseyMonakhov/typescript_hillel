import { DEPARTMENTS } from '../../constants/Departments';
import { Budjet } from '../../types/Budjet';
import { CompanyMemberInterface } from '../../types/Employees/CompanyMember';
import { DevelopmentDepartmentInterface } from '../../types/departments/DevelopmentDepartmentInterface';
import { Department } from './Department';

export class DevelopmentDepartment extends Department implements DevelopmentDepartmentInterface {
  constructor(
    public budjet: Budjet,
    public domainArea: string,
    public membersList: CompanyMemberInterface[],
    public name: DEPARTMENTS
  ) {
    super(budjet, domainArea, membersList, name);
  }

  getBalance(): Budjet {
    return this.budjet;
  }
}
