import { CurrentRateConversionStrategy } from './classes/Strategy';
import { Bank } from './classes/Bank';
import { CurrencyTypesEnum } from './constants';

const exchangeRates = {
  [CurrencyTypesEnum.USD]: 1.1,
  [CurrencyTypesEnum.EUR]: 0.9,
  [CurrencyTypesEnum.UAH]: 38,
};

const bank = Bank.getInstance();
const currentRateConversionStrategy = new CurrentRateConversionStrategy(exchangeRates);

const firstAcc = bank.createAccount(
  { firstName: 'John', lastName: 'Doe' },
  CurrencyTypesEnum.USD,
  currentRateConversionStrategy
);
const secondAcc = bank.createAccount(
  { firstName: 'John', lastName: 'Doe' },
  CurrencyTypesEnum.EUR,
  currentRateConversionStrategy
);

const { number } = bank.createAccount(
  { firstName: 'John', lastName: 'Doe' },
  CurrencyTypesEnum.UAH,
  currentRateConversionStrategy
);

bank.closeAccount(number);

firstAcc.deposite(100);
secondAcc.deposite(100);

const transactionId = firstAcc.withdraw(50, CurrencyTypesEnum.EUR);

firstAcc.undoTransaction(transactionId);
