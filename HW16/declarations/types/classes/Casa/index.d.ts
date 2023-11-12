import { TICKET_TYPE } from '../../constants';
import { IBaseClient, ICasa, IRegisterClient, ITicket } from '../../types';
import { Zoo } from "../Zoo";
export declare class Casa implements ICasa {
    private zoo;
    private clients;
    private ticketsPrices;
    private soldTickets;
    private buchgalteryDepartment;
    constructor(zoo: Zoo);
    private registerClient;
    sellTicket(client: IBaseClient | IRegisterClient, ticketType: TICKET_TYPE): ITicket;
    closeShift(): number;
}
