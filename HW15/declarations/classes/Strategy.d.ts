import { CurrencyTypesEnum } from '../constants';
import { ICurrencyConversionStrategy } from '../types';
export declare class CurrentRateConversionStrategy implements ICurrencyConversionStrategy {
    private exchangeRates;
    constructor(exchangeRates: Record<CurrencyTypesEnum, number>);
    convert(amount: number, currency: CurrencyTypesEnum): number;
}
export declare class FixedRateConversionStrategy implements ICurrencyConversionStrategy {
    private fixedRate;
    constructor(fixedRate: number);
    convert(amount: number, currency: CurrencyTypesEnum): number;
}
