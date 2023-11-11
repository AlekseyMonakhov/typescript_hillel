export function Singleton<T extends { new(...args: any[]): {} }>(constructor: T) {
    const instanceKey = Symbol.for(constructor.name);

    return class extends constructor {
        constructor(...args: any[]) {
            const instance = Reflect.get(globalThis, instanceKey);
            if (instance) {
                return instance;
            }

            super(...args);
            Reflect.set(globalThis, instanceKey, this);
        }
    };
}




