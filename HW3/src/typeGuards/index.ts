import { Department } from '../classes/departments/Department';
import { CompanyMember } from '../classes/employees/CompanyMember';
import { Employee } from '../classes/employees/Employee';
import { Intern } from '../classes/employees/Intern';
import { CompanyMemberInterface } from '../types/Employees/CompanyMember';
import { EmployeeInterface } from '../types/Employees/Employee';
import { InternInterface } from '../types/Employees/Intern';
import { DepartmentInterface } from '../types/departments/Department';

export function isDepartment(item: unknown): item is DepartmentInterface {
  return item instanceof Department;
}

export function isEmployee(item: unknown): item is EmployeeInterface {
  return item instanceof Employee;
}

export function isIntern(item: unknown): item is InternInterface {
  return item instanceof Intern;
}

export function isCompanyMember(item: unknown): item is CompanyMemberInterface {
  return item instanceof CompanyMember;
}

function isStringAsserts(item: unknown): asserts item is string {
  if (typeof item !== 'string') throw new Error('Not string');
}
