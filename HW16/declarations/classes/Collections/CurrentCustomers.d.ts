import { IClient, IManageCollection } from '../../types';
import { SingleTon } from '../SingleTon';
export declare class CurrentCustomer extends SingleTon implements IManageCollection<IClient> {
    private collection;
    add(client: IClient): void;
    get(id: string): IClient | never;
    getAll(): Map<string, IClient>;
    delete(id: string): boolean | never;
    update(id: string, clientInfo: Partial<IClient>): IClient | never;
}
