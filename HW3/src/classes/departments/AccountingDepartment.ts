import { DepartmentInterface } from './../../types/departments/Department';
import { DEPARTMENTS } from '../../constants/Departments';
import { AccountingInterface } from '../../types/departments/AccountingDepartment';
import { CompanyMemberInterface } from '../../types/Employees/CompanyMember';
import { EmployeeInterface } from '../../types/Employees/Employee';
import { Department } from './Department';
import { BalanceInterface } from '../../types/Balance';
import { isCompanyMember, isDepartment, isEmployee, isIntern } from '../../typeGuards';
import { WORK_STATUS } from '../../constants/WorkStatuses';

export class AccoutingDepartment extends Department implements AccountingInterface {
  constructor(
    public budjet: number,
    public credit: number,
    public debit: number,
    public domainArea: string,
    public membersList: CompanyMemberInterface[],
    public name: DEPARTMENTS,
    public balance: BalanceInterface
  ) {
    super(budjet, credit, debit, domainArea, membersList, name);
  }

  addToBalance(unit: DepartmentInterface | EmployeeInterface): void {
    if (isDepartment(unit)) {
      this.balance.departments.push(unit);
    }
    if (isIntern(unit) || isCompanyMember(unit)) {
      this.balance.employees.push(unit);
    }
  }

  removeFromBalance(unit: DepartmentInterface | EmployeeInterface): void {
    if (isDepartment(unit)) {
      this.balance.departments = this.balance.departments.filter(department => department.id !== unit.id);
    }
    if (isEmployee(unit)) {
      this.balance.employees = this.balance.employees.filter(employee => employee.id !== unit.id);
    }
  }

  outerPayment(IBAN: string): string {
    return 'Sending money to this IBAN ' + IBAN;
  }

  innerPayment(accountNumber: string): string {
    return 'Sending money to this account number ' + accountNumber;
  }

  paySalaries(balance: BalanceInterface): void {
    balance.employees.forEach(emploee => {
      if (isIntern(emploee)) {
        this.outerPayment(emploee.bankAccountNumber.toString());
      }

      if (isCompanyMember(emploee)) {
        if (emploee.status === WORK_STATUS.ACTIVE) {
          this.innerPayment(emploee.payInfo.toString());
        } else {
          this.outerPayment(emploee.payInfo.toString());
        }
      }
    });
  }
}
