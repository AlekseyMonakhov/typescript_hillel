import { EmployeeInterface } from './Employee';

export interface InternInterface extends EmployeeInterface {
  bankAccountNumber: number;
}
