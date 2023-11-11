import { IObserver } from "../types/patterns";
export declare class SMSNotification implements IObserver {
    update(message: string): void;
}
export declare class EmailNotification implements IObserver {
    update(message: string): void;
}
export declare class PushNotification implements IObserver {
    update(message: string): void;
}
