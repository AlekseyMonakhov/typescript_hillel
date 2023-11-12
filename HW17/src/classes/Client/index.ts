import {IRegisterClient} from '../../types';
import {v4 as uuidv4} from 'uuid';

export class RegisteredClient implements IRegisterClient {
    public readonly id: string = uuidv4();
    ticketsIds: Set<string> = new Set();

    constructor(
        public name: string,
        public age: number,
        public contacts: {
            phone: string;
            email?: string;
        }
    ) {
    }

    update(message: string): void {
        console.log('Message from Zoo: ', message)

        setTimeout(() => {
            console.log('Zoo is closing in 5 minutes')
        }, 600 * 15)

        setTimeout(() => {
            console.log('Zoo is closing in 1 minute')
        }, 600 * 19)
    }
}
