import { CurrencyTypesEnum } from '../constants';
import { IBank, IBankClient, IComand, ICurrencyConversionStrategy } from '../types';
import { BankAccount } from './BankAccount';
export declare class Bank implements IBank {
    private static instance;
    private accounts;
    private _commandProcessor;
    private constructor();
    static getInstance(): Bank;
    queueTransaction(transaction: IComand): void;
    processTransaction(transactionId: string): void;
    processTransactions(): void;
    undoTransaction(transactionId: string): void;
    redoTransaction(transactionId: string): void;
    createAccount(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy): BankAccount;
    closeAccount(accountNumber: string): string;
}
