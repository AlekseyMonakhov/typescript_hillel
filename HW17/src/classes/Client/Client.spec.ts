import {RegisteredClient} from "./index";

describe('Client', () => {

    test('should create a client', () => {
        const client = new RegisteredClient('Lion', 22, {
            phone: '123456789',
            email: 'some@mg.com'
        });

        expect(client).toBeDefined()
    })
})