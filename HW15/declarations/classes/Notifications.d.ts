import { IObserver } from '../types';
import { BankAccount } from './BankAccount';
export declare class SMSNotification implements IObserver {
    update(account: BankAccount): void;
}
export declare class EmailNotification implements IObserver {
    update(account: BankAccount): void;
}
export declare class PushNotification implements IObserver {
    update(account: BankAccount): void;
}
