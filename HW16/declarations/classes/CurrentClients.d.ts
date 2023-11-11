import { IObservable, IObserver } from "../types/patterns";
export declare abstract class CurrentClients implements IObservable {
    private readonly currentClients;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(message: string): void;
    getCurrentClientsAmount(): number;
    reset(): void;
}
