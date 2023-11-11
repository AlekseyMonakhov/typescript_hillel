import { IAnimal, IManageCollection } from '../../types';
export declare class AnimalCollection implements IManageCollection<IAnimal> {
    private collection;
    add(animal: IAnimal): void;
    get(id: string): IAnimal | never;
    getAll(): Map<string, IAnimal>;
    delete(id: string): boolean | never;
    update(id: string, animalInfo: Partial<IAnimal>): IAnimal | never;
    clear(): void;
}
