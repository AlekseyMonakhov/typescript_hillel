import { LIST_TYPE } from '../../constants';
import { IRegisterClient, IList, IManageCollection } from '../../types';
import {Singleton} from "../../decorators";


@Singleton
export class CurrentVisitors implements IManageCollection<IRegisterClient>, IList {
    private collection: Map<string, IRegisterClient> = new Map();

    type = LIST_TYPE.CURRENT_CUSTOMERS;

    add(client: IRegisterClient): void {
        this.collection.set(client.id, client);
    }

    get(id: string): IRegisterClient | never {
        if (!this.collection.has(id)) throw new Error('client not found');

        return this.collection.get(id)!;
    }

    getAll(): Map<string, IRegisterClient> {
        return new Map(this.collection);
    }

    delete(id: string): boolean | never {
        if (!this.collection.has(id)) throw new Error('client not found');

        return this.collection.delete(id);
    }

    update(id: string, clientInfo: Partial<IRegisterClient>): IRegisterClient | never {
        if (!this.collection.has(id)) throw new Error('client not found');

        const client = this.collection.get(id)!;
        const updatedclient = { ...client, ...clientInfo };

        this.collection.set(id, updatedclient);

        return updatedclient;
    }

    clear() {
        this.collection.clear();
    }
}
