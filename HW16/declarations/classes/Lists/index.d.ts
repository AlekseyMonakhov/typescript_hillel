import { ListType } from '../../constants';
import { IClient, IList } from '../../types';
import { SingleTon } from '../SingleTon';
export declare class ClientsList extends SingleTon implements IList {
    clients: Map<string, IClient>;
    type: ListType;
    constructor(clients: Map<string, IClient>);
}
export declare class CurrentCustomersList extends SingleTon implements IList {
    clients: Map<string, IClient>;
    type: ListType;
    constructor(clients: Map<string, IClient>);
}
