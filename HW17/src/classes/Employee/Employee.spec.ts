import {Employee} from "./index";

describe('Employee', () => {
  test('should create an employee', () => {
    const employee = new Employee('John', 'Manager', 1000);

    expect(employee).toBeDefined();
  })
})