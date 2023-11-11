import {IBudjet} from '../../types';
import {Singleton} from "../../decorators";

@Singleton
export class Budjet implements IBudjet {
    private budjet: Map<string, number> = new Map();
    private income: Map<string, number> = new Map();
    private outcome: Map<string, number> = new Map();

    getIncome(): Map<string, number> {
        return this.income;
    }

    setIncome(income: number): void {
        this.income.set(new Date().toLocaleDateString(), income);
    }

    getOutcome(): Map<string, number> {
        return this.outcome;
    }

    setOutcome(outcome: number): void {
        this.outcome.set(new Date().toLocaleDateString(), outcome);
    }

    calcBudjet(): number {
        const income = Array.from(this.income.values()).reduce((acc, value) => acc + value, 0);
        const outcome = Array.from(this.outcome.values()).reduce((acc, value) => acc + value, 0);
        const budjet = income - outcome;

        this.budjet.set(new Date().toLocaleDateString(), budjet);
        return budjet;
    }

    getBudjetHistory(): Map<string, number> {
        return this.budjet;
    }


}
