import { DEPARTMENTS } from '../../constants/Departments';
import { WORK_STATUS } from '../../constants/WorkStatuses';
import { isCompanyMember, isIntern } from '../../typeGuards';
import { CompanyMemberInterface } from '../../types/Employees/CompanyMember';
import { InternInterface } from '../../types/Employees/Intern';
import { DepartmentInterface } from '../../types/departments/Department';

export class Department implements DepartmentInterface {
  id: string = (Math.random() + 1).toString(36);
  constructor(
    public budjet: number,
    public credit: number,
    public debit: number,
    public domainArea: string,
    public membersList: CompanyMemberInterface[],
    public name: DEPARTMENTS
  ) {}

  addMember(member: InternInterface | CompanyMemberInterface): void {
    if (isIntern(member)) {
      this.membersList.push({
        id: member.id,
        firstName: member.firstName,
        lastName: member.lastName,
        department: this,
        status: WORK_STATUS.ACTIVE,
        payInfo: 123123123,
        sallary: member.sallary * 10,
      });
    }

    if (isCompanyMember(member)) {
      member.department.removeMember(member);
      this.membersList.push(member);
    }
  }

  removeMember(member: CompanyMemberInterface): void {
    this.membersList = this.membersList.filter(department_member => department_member.id !== member.id);
  }
}
