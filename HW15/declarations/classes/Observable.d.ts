import { IObservable, IObserver } from '../types';
export declare abstract class Observable implements IObservable {
    private readonly observers;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}
