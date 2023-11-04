import { CurrencyTypesEnum } from '../constants';
export interface IBankClient {
    readonly firstName: string;
    readonly lastName: string;
}
export interface ICurrencyConversionStrategy {
    convert(amount: number, currency: CurrencyTypesEnum): number;
}
export interface IObserver {
    update(observable: IObservable): void;
}
export interface IObservable {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}
export interface IBankAccount {
    readonly number: string;
    readonly currency: CurrencyTypesEnum;
    readonly balance: number;
    readonly holder: IBankClient;
    conversionStrategy: ICurrencyConversionStrategy;
    deposite(amount: number): string | never;
    withdraw(amount: number, currency: CurrencyTypesEnum): string | never;
    undoTransaction(transactionId: string): void;
    redoTransaction(transactionId: string): void;
}
export interface IBank {
    createAccount(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy): IBankAccount;
    closeAccount(accountNumber: string): string;
}
export interface IComand {
    id: string;
    execute(): void;
    undo(): void;
}
