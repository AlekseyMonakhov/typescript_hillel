import { TICKET_TYPE } from '../../constants';
import { ITicket, ITicketPricesTable } from '../../types';
export declare class Ticket implements ITicket {
    readonly type: TICKET_TYPE;
    readonly price: number;
    readonly clientId: string;
    readonly id: string;
    constructor(type: TICKET_TYPE, price: number, clientId: string);
}
export declare class TicketPricesTable implements ITicketPricesTable {
    private readonly prices;
    getPrice(type: TICKET_TYPE): number;
}
