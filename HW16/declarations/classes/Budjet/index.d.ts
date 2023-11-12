import { IBudjet } from '../../types';
export declare class Budjet implements IBudjet {
    private budjet;
    private income;
    private outcome;
    getIncome(): Map<string, number>;
    setIncome(income: number): void;
    getOutcome(): Map<string, number>;
    setOutcome(outcome: number): void;
    calcBudjet(): number;
    getBudjetHistory(): Map<string, number>;
    resetHistory(): void;
}
