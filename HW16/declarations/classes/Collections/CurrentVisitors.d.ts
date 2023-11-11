import { LIST_TYPE } from '../../constants';
import { IList, IManageCollection, IRegisterClient } from '../../types';
export declare class CurrentVisitorsCollection implements IManageCollection<IRegisterClient>, IList {
    private collection;
    type: LIST_TYPE;
    add(client: IRegisterClient): void;
    get(id: string): IRegisterClient | never;
    getAll(): Map<string, IRegisterClient>;
    delete(id: string): boolean | never;
    update(id: string, clientInfo: Partial<IRegisterClient>): IRegisterClient | never;
    clear(): void;
}
