import { CurrencyTypesEnum } from '../constants';
import { IBankClient, IComand, ICurrencyConversionStrategy } from '../types';
import { CommandProcessor, DepositCommand, WithdrawCommand } from './Command';
import { Observable } from './Observable';

export class BankAccount extends Observable {
  private readonly _number: number;
  readonly currency: CurrencyTypesEnum;
  private _balance = 0;
  private _holder: IBankClient;
  private _conversionStrategy: ICurrencyConversionStrategy;
  private _commandProcessor = new CommandProcessor();

  public get number(): number {
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

  constructor(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy) {
    super();
    this.currency = currency;
    this._holder = client;
    this._number = 1234343;
    this._conversionStrategy = conversionStrategy;
  }

  private queueTransaction(transaction: IComand): void {
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

  public holder(): IBankClient {
    return this._holder;
  }

  public deposite(amount: number): void {
    const transaction = new DepositCommand(this, amount);
    this.queueTransaction(transaction);

    try {
      this.processTransaction(transaction.id);
      this.notify();
    } catch (e) {
      console.log(e);
    }
  }

  public withdraw(amount: number, currency: CurrencyTypesEnum): void {
    const transaction = new WithdrawCommand(this, amount, currency);

    this.queueTransaction(transaction);

    try {
      this.processTransaction(transaction.id);
      this.notify();
    } catch (e) {
      console.log(e);
    }
  }
}
