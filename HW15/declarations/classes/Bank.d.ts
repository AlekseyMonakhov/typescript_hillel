import { CurrencyTypesEnum } from '../constants';
import { IBank, IBankClient, ICurrencyConversionStrategy } from '../types';
import { BankAccount } from './BankAccount';
export declare class Bank implements IBank {
    private static instance;
    private accounts;
    private constructor();
    static getInstance(): Bank;
    createAccount(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy): BankAccount;
    closeAccount(accountNumber: string): string;
}
