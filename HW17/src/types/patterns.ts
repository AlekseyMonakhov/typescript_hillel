export interface IObserver {
    update(message: string): void;
}

export interface IObservable {
    attach(observer: IObserver): void;

    detach(observer: IObserver): void;

    notify(message: string): void;

    resetObserversList(): void;

    getObserversLength(): number;
}