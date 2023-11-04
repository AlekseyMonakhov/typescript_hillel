import { CurrencyTypesEnum } from '../constants';
import { IComand } from './../types/index';
import { BankAccount } from './BankAccount';
export declare class DepositCommand implements IComand {
    private account;
    private amount;
    private readonly _id;
    get id(): string;
    constructor(account: BankAccount, amount: number);
    execute(): void;
    undo(): void;
}
export declare class WithdrawCommand implements IComand {
    private account;
    private amount;
    private currency;
    private readonly _id;
    get id(): string;
    constructor(account: BankAccount, amount: number, currency: CurrencyTypesEnum);
    execute(): void;
    undo(): void;
}
export declare class CommandProcessor {
    private transactionQueue;
    private transactionHistory;
    queueTransaction(transaction: IComand): void;
    confirmTransaction(): boolean;
    processTransaction(transactionId: string): void;
    processTransactions(): void;
    undoTransaction(transactionId: string): void;
    redoTransaction(transactionId: string): void;
}
