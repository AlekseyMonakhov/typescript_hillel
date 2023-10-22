function DeprecatedProp<T, V>(originalProp: undefined, context: ClassFieldDecoratorContext<T, V>) {
    if (context.kind !== 'field') {
        throw new Error('This decorator can only be used on class fields')
    }

    function updatedProp(this: T, originalVal: V): V {
        console.log('This property is deprecated. Please use the new property instead')
        return originalVal
    }

    return updatedProp;
}

class Person {
    @DeprecatedProp
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

