import {IBaseClient, ICasa} from "../types";
import {Casa} from "../classes/Casa";
import {Zoo} from "../classes/Zoo";
import {TICKET_TYPE} from "../constants";

describe('Casa', () => {
    let casa: ICasa;

    beforeEach(() => {
        const zoo = new Zoo();
        casa = new Casa(zoo);
    });

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