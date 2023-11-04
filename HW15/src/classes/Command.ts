import { CurrencyTypesEnum } from '../constants';
import { IComand } from './../types/index';
import { BankAccount } from './BankAccount';
import { v4 as uuidv4 } from 'uuid';

export class DepositCommand implements IComand {
  private readonly _id = uuidv4();

  get id(): string {
    return this._id;
  }

  constructor(
    private account: BankAccount,
    private amount: number
  ) {}

  execute(): void {
    this.account.deposite(this.amount);
  }

  undo(): void {
    this.account.withdraw(this.amount, this.account.currency);
  }
}

export class WithdrawCommand implements IComand {
  private readonly _id = uuidv4();

  get id(): string {
    return this._id;
  }

  constructor(
    private account: BankAccount,
    private amount: number,
    private currency: CurrencyTypesEnum
  ) {}

  execute(): void {
    this.account.withdraw(this.amount, this.currency);
  }

  undo(): void {
    this.account.deposite(this.amount / this.account.conversionStrategy.convert(this.amount, this.currency));
  }
}

export class CommandProcessor {
  private transactionQueue = new Map<string, IComand>();
  private transactionHistory = new Map<string, IComand>();

  public queueTransaction(transaction: IComand): void {
    this.transactionQueue.set(transaction.id, transaction);
  }

  public confirmTransaction(): boolean {
    return confirm('Confirm transaction?');
  }

  public processTransaction(transactionId: string): void {
    const transaction = this.transactionQueue.get(transactionId);

    if (!transaction) throw new Error('Transaction not found');

    if (!this.confirmTransaction()) return;

    transaction.execute();
    this.transactionHistory.set(transaction.id, transaction);
    this.transactionQueue.delete(transaction.id);
  }

  public processTransactions(): void {
    if (!this.confirmTransaction()) return;

    this.transactionQueue.forEach(transaction => {
      transaction.execute();
      this.transactionHistory.set(transaction.id, transaction);
    });

    this.transactionQueue.clear();
  }

  public undoTransaction(transactionId: string): void {
    const transaction = this.transactionHistory.get(transactionId);

    if (!transaction) throw new Error('Transaction not found');

    if (!this.confirmTransaction()) return;

    transaction.undo();
    this.transactionHistory.delete(transaction.id);
  }

  public redoTransaction(transactionId: string): void {
    const transaction = this.transactionHistory.get(transactionId);

    if (!transaction) throw new Error('Transaction not found');

    if (!this.confirmTransaction()) return;
    transaction.execute();
    this.transactionHistory.set(transaction.id, transaction);
  }
}
