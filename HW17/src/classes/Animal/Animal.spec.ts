import {Animal} from "./index";

describe('Animal', () => {


    test('should create an animal', () => {
        const animal = new Animal('Lion', 'Leo', 5, 'Good');

        expect(animal).toBeDefined();
    })

})