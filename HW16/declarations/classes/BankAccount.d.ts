import { CurrencyTypesEnum } from '../constants';
import { IBankAccount, IBankClient, ICurrencyConversionStrategy } from '../types';
import { Observable } from './Observable';
export declare class BankAccount extends Observable implements IBankAccount {
    private readonly _number;
    readonly currency: CurrencyTypesEnum;
    private _balance;
    private _holder;
    private _conversionStrategy;
    private _bank;
    get number(): string;
    get balance(): number;
    set conversionStrategy(strategy: ICurrencyConversionStrategy);
    get conversionStrategy(): ICurrencyConversionStrategy;
    get holder(): IBankClient;
    constructor(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy);
    undoTransaction(transactionId: string): void;
    redoTransaction(transactionId: string): void;
    deposite(amount: number): string | never;
    withdraw(amount: number, currency: CurrencyTypesEnum): string | never;
}
