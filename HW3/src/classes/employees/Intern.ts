import { InternInterface } from '../../types/Employees/Intern';
import { Employee } from './Employee';

export class Intern extends Employee implements InternInterface {
  constructor(
    public bankAccountNumber: number,
    public firstName: string,
    public lastName: string,
    public sallary: number
  ) {
    super(firstName, lastName, sallary);
  }
}
