import { CurrencyTypesEnum } from '../constants';
import { IBank, IBankClient, ICurrencyConversionStrategy } from '../types';
import { BankAccount } from './BankAccount';

export class Bank implements IBank {
  private static instance: Bank;
  private accounts: Map<string, BankAccount> = new Map();

  private constructor() {}

  public static getInstance(): Bank {
    if (!Bank.instance) {
      Bank.instance = new Bank();
    }

    return Bank.instance;
  }

  public createAccount(
    client: IBankClient,
    currency: CurrencyTypesEnum,
    conversionStrategy: ICurrencyConversionStrategy
  ) {
    const account = new BankAccount(client, currency, conversionStrategy);
    this.accounts.set(account.number, account);
    return account;
  }

  public closeAccount(accountNumber: string) {
    if (!this.accounts.has(accountNumber)) throw new Error('Account not found');
    this.accounts.delete(accountNumber);
    return accountNumber;
  }
}
