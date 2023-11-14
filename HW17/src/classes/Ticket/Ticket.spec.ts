import {Ticket} from "./index";
import {TICKET_TYPE} from "../../constants";

describe('Ticket', () => {
    test('should create a ticket', () => {
        const ticket = new Ticket(TICKET_TYPE.ADULT, 100, '123456789');

        expect(ticket).toBeDefined();

    })

})