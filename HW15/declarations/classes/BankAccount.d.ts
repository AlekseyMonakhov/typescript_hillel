import { CurrencyTypesEnum } from '../constants';
import { IBankClient, ICurrencyConversionStrategy } from '../types';
import { Observable } from './Observable';
export declare class BankAccount extends Observable {
    private readonly _number;
    readonly currency: CurrencyTypesEnum;
    private _balance;
    private _holder;
    private _conversionStrategy;
    private _commandProcessor;
    get number(): number;
    get balance(): number;
    set conversionStrategy(strategy: ICurrencyConversionStrategy);
    get conversionStrategy(): ICurrencyConversionStrategy;
    constructor(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy);
    private queueTransaction;
    processTransaction(transactionId: string): void;
    processTransactions(): void;
    undoTransaction(transactionId: string): void;
    redoTransaction(transactionId: string): void;
    holder(): IBankClient;
    deposite(amount: number): void;
    withdraw(amount: number, currency: CurrencyTypesEnum): void;
}
