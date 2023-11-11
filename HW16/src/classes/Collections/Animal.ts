import {IAnimal, IManageCollection} from '../../types';
import {Singleton} from "../../decorators";

@Singleton
export class AnimalCollection implements IManageCollection<IAnimal> {
    private collection: Map<string, IAnimal> = new Map();

    add(animal: IAnimal): void {
        this.collection.set(animal.id, animal);
    }

    get(id: string): IAnimal | never {
        if (!this.collection.has(id)) throw new Error('Animal not found');

        return this.collection.get(id)!;
    }

    getAll(): Map<string, IAnimal> {
        return this.collection;
    }

    delete(id: string): boolean | never {
        if (!this.collection.has(id)) throw new Error('Animal not found');

        return this.collection.delete(id);
    }

    update(id: string, animalInfo: Partial<IAnimal>): IAnimal | never {
        if (!this.collection.has(id)) throw new Error('Animal not found');

        const animal = this.collection.get(id)!;
        const updatedAnimal = {...animal, ...animalInfo};

        this.collection.set(id, updatedAnimal);

        return updatedAnimal;
    }

    clear() {
        this.collection.clear();
    }
}
