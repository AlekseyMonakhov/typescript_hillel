import {Zoo} from "./classes/Zoo";
import {TICKET_TYPE} from "./constants";

const zoo = new Zoo();

zoo.buchgalteryDepartment.addIncome(10000);


for (let i = 0; i < 10; i++) {
    zoo.adminDepartment.addEmployee({
        name: 'Alice',
        position: 'manager',
        salary: 1000
    });
}

for (let i = 0; i < 20; i++) {
    zoo.adminDepartment.addAnimal({
        type: 'Lion',
        name: 'Leo',
        age: 25,
        health: 'good'
    });
}


for (let i = 0; i < 201; i++) {
    zoo.casa.sellTicket({
            name: 'Leo' + i,
            age: 25,
            contacts: {
                phone: '123456789' + i
            }
        },
        i % 2 === 0 ? TICKET_TYPE.ADULT : i % 3 === 0 ? TICKET_TYPE.CHILD : TICKET_TYPE.FAMILY
    );
}

zoo.casa.closeShift();


zoo.marketingDepartment.sendMessageToAllClients('Hello, dear clients!');

console.log(zoo.buchgalteryDepartment.getIncomeReport(new Date().toLocaleDateString(), new Date().toLocaleDateString()))

console.log(zoo.buchgalteryDepartment.getCurrentBudjet())