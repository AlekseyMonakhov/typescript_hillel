import {AdminDepartment} from "../classes/Departments";

describe('AdminDepartment', () => {
    let adminDepartment: AdminDepartment;

    beforeEach(() => {
        adminDepartment = new AdminDepartment();
    });

    test('should add a new animal', () => {
        const animal = {type: 'Lion', name: 'Leo', age: 5, health: 'Good'};
        const addedAnimal = adminDepartment.addAnimal(animal);

        expect(addedAnimal).toMatchObject(animal);
        expect(addedAnimal.id).toBeDefined();
    });


    test('should update animal info', () => {
        const animal = {type: 'Lion', name: 'Leo', age: 5, health: 'Good'};
        const addedAnimal = adminDepartment.addAnimal(animal);
        const updatedAnimal = adminDepartment.updateAnimalInfo(addedAnimal.id, {age: 6});

        expect(updatedAnimal).toMatchObject({...animal, age: 6});
    });


    test('should remove animal', () => {
        const animal = {type: 'Lion', name: 'Leo', age: 5, health: 'Good'};
        const addedAnimal = adminDepartment.addAnimal(animal);
        const isRemoved = adminDepartment.removeAnimal(addedAnimal.id);

        expect(isRemoved).toBeTruthy();
    })


    test('should add new employee', () => {
        const employee = {name: 'John', position: 'Manager', salary: 1000};
        const addedEmployee = adminDepartment.addEmployee(employee);

        expect(addedEmployee).toMatchObject(employee);
        expect(addedEmployee.id).toBeDefined();
    });


    test('should update employee info', () => {
        const employee = {name: 'John', position: 'Manager', salary: 1000};
        const addedEmployee = adminDepartment.addEmployee(employee);
        const updatedEmployee = adminDepartment.updateEmployeeInfo(addedEmployee.id, {salary: 2000});

        expect(updatedEmployee).toMatchObject({...employee, salary: 2000});
    });


    test('should remove employee', () => {
        const employee = {name: 'John', position: 'Manager', salary: 1000};
        const addedEmployee = adminDepartment.addEmployee(employee);
        const isRemoved = adminDepartment.removeEmployee(addedEmployee.id);

        expect(isRemoved).toBeTruthy();
    });


    test('should throw an error when try to update not existing animal', () => {
        expect(() => adminDepartment.updateAnimalInfo('not-existing-id', {age: 6})).toThrowError('Animal not found');
    });

});