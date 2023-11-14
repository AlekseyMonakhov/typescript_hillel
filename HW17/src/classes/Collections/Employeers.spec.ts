import {IEmployee} from "../../types";
import {EmployeersCollection} from "./Employeers";

describe('Current Visitors Collection', () => {
    const employeersCollection = new EmployeersCollection();

    const employee: IEmployee = {
        name: 'Lion',
        id: '123',
        salary: 2500,
        position: 'Manager',
        receiveSalary(amount: number) {
            console.log('received salary: ', amount, 'UAH')
        }
    }

    beforeEach(() => {
        employeersCollection.clear();
    });

    test('should add Current Visitor to collection', () => {


        employeersCollection.add(employee);

        expect(employeersCollection.get(employee.id)).toMatchObject(employee);

    })

    test('should update Current Visitor', () => {


        employeersCollection.add(employee);

        const updatedClient = employeersCollection.update(employee.id, {salary: 3000});

        expect(updatedClient).toMatchObject({...employee, salary: 3000});
    })

    test('should delete Current Visitor', () => {
        employeersCollection.add(employee);

        const isRemoved = employeersCollection.delete(employee.id);

        expect(isRemoved).toBeTruthy();
    })

    test('should get all Current Visitor', () => {
        employeersCollection.add(employee);

        const employees = employeersCollection.getAll();

        expect(employees.size).toBe(1)
    })

})