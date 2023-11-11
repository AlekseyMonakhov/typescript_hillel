import {IBudjet} from '../../types';
import {Singleton} from "../../decorators";

@Singleton
export class Budjet implements IBudjet {
    private budjet: Map<number, number> = new Map();
    private income: Map<number, number> = new Map();
    private outcome: Map<number, number> = new Map();

    getIncome(): Map<number, number> {
        return this.income;
    }

    setIncome(income: number): void {
        this.income.set(Date.now(), income);
    }

    getOutcome(): Map<number, number> {
        return this.outcome;
    }

    setOutcome(outcome: number): void {
        this.outcome.set(Date.now(), outcome);
    }

    calcBudjet(): number {
        const income = Array.from(this.income.values()).reduce((acc, value) => acc + value, 0);
        const outcome = Array.from(this.outcome.values()).reduce((acc, value) => acc + value, 0);
        const budjet = income - outcome;

        this.budjet.set(Date.now(), budjet);
        return budjet;
    }

    getBudjetHistory(): Map<number, number> {
        return this.budjet;
    }


}
