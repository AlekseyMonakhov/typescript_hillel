import {TICKET_TYPE} from '../../constants';
import {ITicket, ITicketPricesTable} from '../../types';
import {v4 as uuidv4} from 'uuid';
import {Singleton} from "../../decorators";

export class Ticket implements ITicket {
    readonly id: string = uuidv4();

    constructor(
        public readonly type: TICKET_TYPE,
        public readonly price: number,
        public readonly clientId: string
    ) {
    }
}

@Singleton
export class TicketPricesTable implements ITicketPricesTable {
    private readonly prices: Map<TICKET_TYPE, number> = new Map<TICKET_TYPE, number>([
        [TICKET_TYPE.ADULT, 150],
        [TICKET_TYPE.CHILD, 100],
        [TICKET_TYPE.FAMILY, 200],
    ]);

    getPrice(type: TICKET_TYPE): number {
        return this.prices.get(type)!;
    }
}
