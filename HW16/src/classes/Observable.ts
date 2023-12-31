import {IObservable, IObserver} from "../types/patterns";

export abstract class Observable implements IObservable {
    private readonly observers: Set<IObserver> = new Set();

    public attach(observer: IObserver): void {
        if (this.observers.has(observer)) throw new Error('Observer already attached');
        this.observers.add(observer);
    }

    public detach(observer: IObserver): void {
        if (!this.observers.has(observer)) throw new Error('Observer not attached');
        this.observers.delete(observer);
    }

    public notify(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }

    public resetObserversList(): void {
        this.observers.clear();
    }

    public getObserversLength(): number {
        return this.observers.size;
    }
}
