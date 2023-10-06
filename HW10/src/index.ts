type MyReturnType<T> = T extends (...args: Array<infer U>) => infer U ? U : never;

const myFunction = (a: number, b: number): number => a + b;

type ResultType = MyReturnType<typeof myFunction>;

type MySecondReturnType<T> = T extends (arg: infer U) => infer V ? [V, U] : never;

const mySecondFunction = (a: number): string => a + '1';

type SecondResultType = MySecondReturnType<typeof mySecondFunction>;
