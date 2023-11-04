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

export interface IBank {
  createAccount(
    client: IBankClient,
    currency: CurrencyTypesEnum,
    conversionStrategy: ICurrencyConversionStrategy
  ): void;

  closeAccount(accountNumber: number): void;
}
