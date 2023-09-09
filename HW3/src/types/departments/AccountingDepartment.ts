import { DepartmentInterface } from './Department';
import { EmployeeInterface } from '../Employees/Employee';
import { BalanceInterface } from '../Balance';

export interface AccountingInterface extends DepartmentInterface {
  balance: BalanceInterface;

  addToBalance(unit: DepartmentInterface | EmployeeInterface): void;
  removeFromBalance(unit: DepartmentInterface | EmployeeInterface): void;
  paySalaries(balance: BalanceInterface): void;
}
