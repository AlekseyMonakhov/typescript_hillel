import { WORK_STATUS } from '../../constants/WorkStatuses';
import { DepartmentInterface } from '../departments/Department';
import { EmployeeInterface } from './Employee';

export interface CompanyMemberInterface extends EmployeeInterface {
  payInfo: number;
  status: WORK_STATUS;
  department: DepartmentInterface;
}
