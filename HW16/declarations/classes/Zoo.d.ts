import { AdminDepartment, BuchgalteryDepartment, MarketingDepartment } from "./Departments";
import { Casa } from "./Casa";
import { IZoo } from "../types";
export declare class Zoo implements IZoo {
    private currentVisitors;
    buchgalteryDepartment: BuchgalteryDepartment;
    adminDepartment: AdminDepartment;
    marketingDepartment: MarketingDepartment;
    casa: Casa;
    notifyBeforeClose(message: string): void;
}
