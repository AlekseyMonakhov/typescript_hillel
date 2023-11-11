import { IObservable, IObserver } from "../types/patterns";
export declare abstract class Observable implements IObservable {
    private readonly observers;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(message: string): void;
    resetObserversList(): void;
    getObserversLength(): number;
}
