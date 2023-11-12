import {Observable} from './Observable';
import {Singleton} from "../decorators";
import {AdminDepartment, BuchgalteryDepartment, MarketingDepartment} from "./Departments";
import {Casa} from "./Casa";
import {IZoo} from "../types";
import {CurrentVisitors} from "./Collections/CurrentVisitors";


@Singleton
export class Zoo implements IZoo {
    private currentVisitors = new CurrentVisitors();


    public buchgalteryDepartment = new BuchgalteryDepartment();
    public adminDepartment = new AdminDepartment();
    public marketingDepartment = new MarketingDepartment();
    public casa = new Casa();


    notifyBeforeClose(message: string): void {
        const visitors = this.currentVisitors.getAll();

        for (const [id, visitor] of visitors) {
            visitor.update(message);
        }

        this.currentVisitors.clear();
    }
}

