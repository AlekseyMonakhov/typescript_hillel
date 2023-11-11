import {Zoo} from './Zoo';
import {IObserver} from "../types/patterns";

export class SMSNotification implements IObserver {
    update(message:string): void {
        console.log(message);
    }
}

export class EmailNotification implements IObserver {
    update(message:string): void {
        console.log(message);
    }
}

export class PushNotification implements IObserver {
    update(message:string): void {
        console.log(message);
    }
}
