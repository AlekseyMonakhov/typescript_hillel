export declare class SingleTon<T> {
    static instance: T;
    protected constructor();
    static getInstance(): SingleTon;
}
