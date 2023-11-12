import {IBaseClient, ICasa} from "../types";
import {Casa} from "../classes/Casa";
import {TICKET_TYPE} from "../constants";

describe('Casa', () => {
    let casa =new Casa();;

    test("it should sell ticket", () => {
        const client: IBaseClient = {
            name: 'John',
            age: 20,
            contacts: {
                email: 'myemail@gmail.com',
                phone: '123456789'
            }
        }

        const ticket = casa.sellTicket(client, TICKET_TYPE.ADULT)

        expect(ticket).toBeDefined();
    })
})