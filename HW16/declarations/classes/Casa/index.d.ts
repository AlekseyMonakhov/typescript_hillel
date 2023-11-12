import { TICKET_TYPE } from '../../constants';
import { IBaseClient, ICasa, IRegisterClient, ITicket } from '../../types';
export declare class Casa implements ICasa {
    private clients;
    private currentVisitors;
    private ticketsPrices;
    private soldTickets;
    private buchgalteryDepartment;
    private registerClient;
    sellTicket(client: IBaseClient | IRegisterClient, ticketType: TICKET_TYPE): ITicket;
    closeShift(): number;
}
