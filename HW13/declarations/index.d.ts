declare function DeprecatedProp<T, V>(originalProp: undefined, context: ClassFieldDecoratorContext<T, V>): (this: T, originalVal: V) => V;
declare class Person {
    name: string;
    constructor(name: string);
}
