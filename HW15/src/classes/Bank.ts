import { CurrencyTypesEnum } from '../constants';
import { IBank, IBankClient, IComand, ICurrencyConversionStrategy } from '../types';
import { BankAccount } from './BankAccount';
import { CommandProcessor } from './Command';

export class Bank implements IBank {
  private static instance: Bank;
  private accounts: Map<string, BankAccount> = new Map();
  private _commandProcessor = new CommandProcessor();

  private constructor() {}

  public static getInstance(): Bank {
    if (!Bank.instance) {
      Bank.instance = new Bank();
    }

    return Bank.instance;
  }

  public queueTransaction(transaction: IComand): void {
    this._commandProcessor.queueTransaction(transaction);
  }

  public processTransaction(transactionId: string): void {
    this._commandProcessor.processTransaction(transactionId);
  }

  public processTransactions(): void {
    this._commandProcessor.processTransactions();
  }

  public undoTransaction(transactionId: string): void {
    this._commandProcessor.undoTransaction(transactionId);
  }

  public redoTransaction(transactionId: string): void {
    this._commandProcessor.redoTransaction(transactionId);
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
