import { IBudjet } from '../../types';
export declare class Budjet implements IBudjet {
    private budjet;
    private income;
    private outcome;
    getIncome(): Map<number, number>;
    setIncome(income: number): void;
    getOutcome(): Map<number, number>;
    setOutcome(outcome: number): void;
    calcBudjet(): number;
    getBudjetHistory(): Map<number, number>;
}
