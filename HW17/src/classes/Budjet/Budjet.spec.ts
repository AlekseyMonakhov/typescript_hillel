import {Budjet} from "./index";

describe('Budjet', () => {
    let budjet = new Budjet();


    beforeEach(() => {
        budjet.resetHistory()
    });

    test('should correctly add income and calculate total', () => {
        budjet.setIncome(1000);
        budjet.setIncome(500);


        expect(budjet.calcBudjet()).toBe(1500);

    })


    test('should correctly add outcome and calculate total', () => {
        budjet.setOutcome(1000);
        budjet.setOutcome(500);

        expect(budjet.calcBudjet()).toBe(-1500);

    })


    test('should correctly get income report', () => {
        budjet.setIncome(1000);
        budjet.setIncome(500);
        budjet.setIncome(2500);
        budjet.setIncome(5500);

        const today = new Date().toLocaleDateString();

        const incomeReport = budjet.getIncome();

        expect(incomeReport.get(today)).toBe(9500);
    })


    test('should correctly get outcome report', () => {
        budjet.setOutcome(1000);
        budjet.setOutcome(500);
        budjet.setOutcome(2500);
        budjet.setOutcome(5500);

        const today = new Date().toLocaleDateString();

        const outcomeReport = budjet.getOutcome();

        expect(outcomeReport.get(today)).toBe(9500);
    })

    test('should correctly get budjet report', () => {
        budjet.setIncome(1000);
        budjet.setIncome(500);
        budjet.setOutcome(2500);
        budjet.setOutcome(5500);

        const today = new Date().toLocaleDateString();

        const budjetReport = budjet.getBudjetHistory();

        expect(budjetReport.get(today)).toBe(-6500);
    })

    test('should correctly reset history', () => {
        budjet.setIncome(1000);
        budjet.setIncome(500);
        budjet.setOutcome(2500);
        budjet.setOutcome(5500);

        budjet.resetHistory();

        expect(budjet.getIncome().size).toBe(0);
        expect(budjet.getOutcome().size).toBe(0);
    })

})