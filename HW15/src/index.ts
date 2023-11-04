import { CurrencyTypesEnum } from './constants';
import { IBank, IBankClient, IComand, ICurrencyConversionStrategy, IObservable, IObserver } from './types';

const exchangeRates = {
  [CurrencyTypesEnum.USD]: 1.1,
  [CurrencyTypesEnum.EUR]: 0.9,
  [CurrencyTypesEnum.UAH]: 38,
};

class CurrentRateConversionStrategy implements ICurrencyConversionStrategy {
  constructor(private exchangeRates: Record<CurrencyTypesEnum, number>) {}

  public convert(amount: number, currency: CurrencyTypesEnum): number {
    const rate = this.exchangeRates[currency];

    if (!rate) throw new Error(`Exchange rate not available for currency ${currency}`);

    return amount * rate;
  }
}

class FixedRateConversionStrategy implements ICurrencyConversionStrategy {
  constructor(private fixedRate: number) {}

  public convert(amount: number, currency: CurrencyTypesEnum): number {
    return amount * this.fixedRate;
  }
}

abstract class Observable implements IObservable {
  private readonly observers: Set<IObserver> = new Set();

  public attach(observer: IObserver): void {
    if (this.observers.has(observer)) throw new Error('Observer already attached');
    this.observers.add(observer);
  }

  public detach(observer: IObserver): void {
    if (!this.observers.has(observer)) throw new Error('Observer not attached');
    this.observers.delete(observer);
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class BankAccount extends Observable {
  private readonly currency: CurrencyTypesEnum;
  private readonly _number: number;
  private _balance = 0;
  private _holder: IBankClient;
  private _conversionStrategy: ICurrencyConversionStrategy;

  public get number(): number {
    return this._number;
  }

  public get balance(): number {
    return this._balance;
  }

  public set conversionStrategy(strategy: ICurrencyConversionStrategy) {
    this._conversionStrategy = strategy;
  }

  constructor(client: IBankClient, currency: CurrencyTypesEnum, conversionStrategy: ICurrencyConversionStrategy) {
    super();
    this.currency = currency;
    this._holder = client;
    this._number = 1234343;
    this._conversionStrategy = conversionStrategy;
  }

  public holder(): IBankClient {
    return this._holder;
  }

  public deposite(amount: number): void {
    this._balance += amount;
    this.notify();
  }

  public withdraw(amount: number, currency: CurrencyTypesEnum): void {
    const convertedAmount = this._conversionStrategy.convert(amount, currency);

    this._balance -= convertedAmount;
    this.notify();
  }
}

class SMSNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(`SMS notification: Your account balance has chenged. Current balance: ${account.balance}`);
  }
}

class EmailNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(`Email notification: Your account balance has chenged. Current balance: ${account.balance}`);
  }
}

class PushNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(`Push notification: Your account balance has chenged. Current balance: ${account.balance}`);
  }
}

class Bank implements IBank {
  private static instance: Bank;
  private accounts: Map<number, BankAccount> = new Map();

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
  }

  public closeAccount(accountNumber: number) {
    if (!this.accounts.has(accountNumber)) throw new Error('Account not found');
    this.accounts.delete(accountNumber);
  }
}
