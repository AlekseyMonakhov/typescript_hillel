import {IBuchgalteryDepartment} from "../../types";
import {BuchgalteryDepartment} from "./index";

describe('BuchgalteryDepartment', () => {
    let buchgalteryDepartment: IBuchgalteryDepartment;

    beforeEach(() => {
        buchgalteryDepartment = new BuchgalteryDepartment();
        buchgalteryDepartment.resetBudjetHistory()

    });

    test('should correctly add income and calculate total', () => {
        buchgalteryDepartment.addIncome(1000);
        buchgalteryDepartment.addIncome(500);


        expect(buchgalteryDepartment.getCurrentBudjet()).toBe(1500);

    });

    test('should correctly add outcome and calculate total', () => {
        buchgalteryDepartment.addOutcome(1000);
        buchgalteryDepartment.addOutcome(500);

        expect(buchgalteryDepartment.getCurrentBudjet()).toBe(-1500);

    });


    test('should correctly get income report', () => {
        buchgalteryDepartment.addIncome(1000);
        buchgalteryDepartment.addIncome(500);
        buchgalteryDepartment.addIncome(2500);
        buchgalteryDepartment.addIncome(5500);

        const today = new Date().toLocaleDateString();

        const incomeReport = buchgalteryDepartment.getIncomeReport(today, today);


        expect(incomeReport.get(today)).toBe(9500);
    });


    test('should correctly get outcome report', () => {
        buchgalteryDepartment.addOutcome(1000);
        buchgalteryDepartment.addOutcome(500);
        buchgalteryDepartment.addOutcome(2500);
        buchgalteryDepartment.addOutcome(5500);

        const today = new Date().toLocaleDateString();

        const outcomeReport = buchgalteryDepartment.getOutcomeReport(today, today);

        expect(outcomeReport.get(today)).toBe(9500);
    })

    test('should correctly get budjet report', () => {
        buchgalteryDepartment.addIncome(1000);
        buchgalteryDepartment.addIncome(500);
        buchgalteryDepartment.addIncome(2500);
        buchgalteryDepartment.addIncome(5500);

        buchgalteryDepartment.addOutcome(1000);
        buchgalteryDepartment.addOutcome(500);
        buchgalteryDepartment.addOutcome(2500);
        buchgalteryDepartment.addOutcome(5500);

        const today = new Date().toLocaleDateString();

        const budjetReport = buchgalteryDepartment.getBudjetReport(today, today);

        expect(budjetReport.get(today)).toBe(0);
    })
});
