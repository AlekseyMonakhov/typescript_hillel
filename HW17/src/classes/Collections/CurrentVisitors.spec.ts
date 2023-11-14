import {IRegisterClient} from "../../types";
import {CurrentVisitors} from "./CurrentVisitors";

describe('Current Visitors Collection', () => {
    const currentVisitors = new CurrentVisitors();

    const client: IRegisterClient = {
        name: 'Lion',
        age: 22,
        contacts: {
            phone: '123456789',
            email: 'some@mail.com',
        },
        id: '123',
        ticketsIds: new Set<string>(),
        update(message: string) {
            console.log('Message from Zoo: ', message)
        }
    }

    beforeEach(() => {
        currentVisitors.clear();
    });

    test('should add Current Visitor to collection', () => {


        currentVisitors.add(client);

        expect(currentVisitors.get(client.id)).toMatchObject(client);

    })

    test('should update Current Visitor', () => {


        currentVisitors.add(client);

        const updatedClient = currentVisitors.update(client.id, {age: 23});

        expect(updatedClient).toMatchObject({...client, age: 23});
    })

    test('should delete Current Visitor', () => {
        currentVisitors.add(client);

        const isRemoved = currentVisitors.delete(client.id);

        expect(isRemoved).toBeTruthy();
    })

    test('should get all Current Visitor', () => {
        currentVisitors.add(client);

        const clients = currentVisitors.getAll();

        expect(clients.size).toBe(1)
    })

})