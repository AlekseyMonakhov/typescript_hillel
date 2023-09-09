import { WORK_STATUS } from '../../constants/WorkStatuses';
import { CompanyMemberInterface } from '../../types/Employees/CompanyMember';
import { DepartmentInterface } from '../../types/departments/Department';
import { Employee } from './Employee';

export class CompanyMember extends Employee implements CompanyMemberInterface {
  constructor(
    public department: DepartmentInterface,
    public firstName: string,
    public lastName: string,
    public payInfo: number,
    public sallary: number,
    public status: WORK_STATUS
  ) {
    super(firstName, lastName, sallary);
  }
}
