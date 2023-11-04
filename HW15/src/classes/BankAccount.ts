import { CurrencyTypesEnum } from '../constants';
import { IBankAccount, IBankClient, IComand, ICurrencyConversionStrategy } from '../types';
import { Bank } from './Bank';
import { CommandProcessor, DepositCommand, WithdrawCommand } from './Command';
import { Observable } from './Observable';
import { v4 as uuidv4 } from 'uuid';

export class BankAccount extends Observable implements IBankAccount {
  private readonly _number: string = uuidv4();
  readonly currency: CurrencyTypesEnum;
  private _balance = 0;
  private _holder: IBankClient;
  private _conversionStrategy: ICurrencyConversionStrategy;
  private _bank = Bank.getInstance();

  public get number(): string {
    return this._number;
  }

  public get balance(): number {
    return this._balance;
  }

  public set conversionStrategy(strategy: ICurrencyConversionStrategy) {
    this._conversionStrategy = strategy;
  }

  public get conversionStrategy(): ICurrencyConversionStrategy {
    return this._conversionStrategy;
  }

  get holder(): IBankClient {
    return this._holder;
  }

  constructor(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy) {
    super();
    this.currency = currency;
    this._holder = client;
    this._conversionStrategy = conversionStrategy;
  }

  public undoTransaction(transactionId: string): void {
    this._bank.undoTransaction(transactionId);
  }

  public redoTransaction(transactionId: string): void {
    this._bank.redoTransaction(transactionId);
  }

  public deposite(amount: number): string | never {
    const transaction = new DepositCommand(this, amount);
    this._bank.queueTransaction(transaction);

    this._bank.processTransaction(transaction.id);
    this.notify();

    return transaction.id;
  }

  public withdraw(amount: number, currency: CurrencyTypesEnum): string | never {
    const transaction = new WithdrawCommand(this, amount, currency);

    this._bank.queueTransaction(transaction);

    this._bank.processTransaction(transaction.id);
    this.notify();

    return transaction.id;
  }
}
