import {TICKET_TYPE} from '../../constants';
import {IBaseClient, ICasa, IRegisterClient} from '../../types';
import {RegisteredClient} from '../Client';
import {ClientCollection} from '../Collections/Clients';
import {Ticket, TicketPricesTable} from "../Ticket";
import {Singleton} from "../../decorators";
import {BuchgalteryDepartment} from "../Departments";
import {Zoo} from "../Zoo";


@Singleton
export class Casa implements ICasa {
    private clients = new ClientCollection();
    private ticketsPrices = new TicketPricesTable();
    private soldTickets = new Map<string, Ticket>();
    private buchgalteryDepartment = new BuchgalteryDepartment()

    constructor(private zoo: Zoo) {
    }

    private registerClient(client: IBaseClient): IRegisterClient {
        const registeredClient = new RegisteredClient(client.name, client.age, client.contacts);
        this.clients.add(registeredClient);

        return registeredClient;
    }

    sellTicket(client: IBaseClient | IRegisterClient, ticketType: TICKET_TYPE): void {
        const ticketPrice = this.ticketsPrices.getPrice(ticketType);
        let currentClient;

        if ('id' in client) {
            currentClient = this.clients.get(client.id);
        } else {
            currentClient = this.registerClient(client);
        }

        const ticket = new Ticket(ticketType, ticketPrice, currentClient.id);

        currentClient.ticketsIds.add(ticket.id);

        this.zoo.attach(currentClient);
        this.soldTickets.set(ticket.id, ticket);
    }

    closeShift(): number {
        const profit = Array.from(this.soldTickets).reduce((acc, [id, ticket]) => acc + ticket.price, 0);
        this.buchgalteryDepartment.addIncome(profit);
        return profit;
    }
}
