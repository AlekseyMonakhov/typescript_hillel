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
        const date = new Date().toLocaleDateString();

        if (this.income.has(date)) {
            const currentIncome = this.income.get(date)!;
            this.income.set(date, currentIncome + income);
            return;
        }

        this.income.set(date, income);

    }

    getOutcome(): Map<string, number> {
        return this.outcome;
    }

    setOutcome(outcome: number): void {
        const date = new Date().toLocaleDateString();

        if (this.outcome.has(date)) {
            const currentOutcome = this.outcome.get(date)!;
            this.outcome.set(date, currentOutcome + outcome);
            return;
        }

        this.outcome.set(date, outcome);
    }

    calcBudjet(): number {
        const income = Array.from(this.income.values()).reduce((acc, value) => acc + value, 0);
        const outcome = Array.from(this.outcome.values()).reduce((acc, value) => acc + value, 0);
        const budjet = income - outcome;

        this.budjet.set(new Date().toLocaleDateString(), budjet);
        return budjet;
    }

    getBudjetHistory(): Map<string, number> {
        this.calcBudjet();
        return this.budjet;
    }

    resetHistory(): void {
        this.budjet.clear();
        this.income.clear();
        this.outcome.clear();
    }


}
