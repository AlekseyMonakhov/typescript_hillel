import {ClientCollection} from "./Clients";
import {IRegisterClient} from "../../types";

describe('Client Collection', () => {
    const clientCollection = new ClientCollection();

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
        clientCollection.clear();
    });

    test('should add Client to collection', () => {


        clientCollection.add(client);

        expect(clientCollection.get(client.id)).toMatchObject(client);

    })

    test('should update Client', () => {


        clientCollection.add(client);

        const updatedClient = clientCollection.update(client.id, {age: 23});

        expect(updatedClient).toMatchObject({...client, age: 23});
    })

    test('should delete Client', () => {
        clientCollection.add(client);

        const isRemoved = clientCollection.delete(client.id);

        expect(isRemoved).toBeTruthy();
    })

    test('should get all Clients', () => {
        clientCollection.add(client);

        const clients = clientCollection.getAll();

        expect(clients.size).toBe(1)
    })

})