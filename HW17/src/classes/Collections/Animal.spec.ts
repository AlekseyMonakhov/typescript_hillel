import {AnimalCollection} from "./Animal";

describe('Animal Collection', () => {
    const animalCollection = new AnimalCollection();


    beforeEach(() => {
        animalCollection.clear();
    })


    test('should create Animal collection', () => {

        const animal = {
            name: 'Leo',
            type: 'Lion',
            id: '123',
            age: 5,
            health: 'Good'
        }

        animalCollection.add(animal)


        expect(animalCollection).toBeDefined();

        expect(animalCollection.get(animal.id)).toMatchObject(animal);
    })

    test('should update animal info', () => {
        const animalCollection = new AnimalCollection();

        const animal = {
            name: 'Leo',
            type: 'Lion',
            id: '123',
            age: 5,
            health: 'Good'
        }

        animalCollection.add(animal)

        const updatedAnimal = animalCollection.update(animal.id, {age: 6});

        expect(updatedAnimal).toMatchObject({...animal, age: 6});
    })

    test('should remove animal', () => {

        const animal = {
            name: 'Leo',
            type: 'Lion',
            id: '123',
            age: 5,
            health: 'Good'
        }

        animalCollection.add(animal)

        const isRemoved = animalCollection.delete(animal.id);

        expect(isRemoved).toBeTruthy();
    })

    test('should return all animals', () => {

        const animal = {
            name: 'Leo',
            type: 'Lion',
            id: '123',
            age: 5,
            health: 'Good'
        }

        animalCollection.add(animal)

        expect(animalCollection.getAll().size).toBe(1);
    })
})