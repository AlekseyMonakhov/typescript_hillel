import { Budjet } from '../Budjet';
import { DepartmentInterface } from './Department';

export interface DevelopmentDepartmentInterface extends DepartmentInterface {
  getBalance(): Budjet;
}
