import { DepartmentInterface } from './Department';

export interface DevelopmentDepartmentInterface extends DepartmentInterface {
  getBalance(): number;
}
