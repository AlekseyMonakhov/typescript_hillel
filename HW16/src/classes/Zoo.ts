import {Observable} from './Observable';
import {Singleton} from "../decorators";
import {AdminDepartment, BuchgalteryDepartment} from "./Departments";
import {Casa} from "./Casa";
import {IZoo} from "../types";


@Singleton
export class Zoo extends Observable implements IZoo {
    public buchgalteryDepartment = new BuchgalteryDepartment();
    public adminDepartment = new AdminDepartment();
    public casa = new Casa(this);

    notifyBeforeClose(message: string): void {
        this.notify(message);

        setTimeout(() => {
            this.notify('Zoo is closing in 5 minutes');
        }, 600 * 15)

        setTimeout(() => {
            this.notify('Zoo is closed');
            this.resetObserversList()
        }, 600 * 20)
    }
}

