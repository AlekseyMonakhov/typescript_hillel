interface Ifirst {
    [key: string]: number | string;
}

interface ISecond {
    [key: string]: (...args: any[]) => string
}

interface IThird {
    [key: string]: {
        [key: number]: string
    }
}

interface IFourth {
    name: string

    [key: string]: string
}

interface IFiveth extends Ifirst {
    name: string
    age: number;
}


function areValuesNumbers(obj: Ifirst): boolean {
    return Object.values(obj).every((el) => typeof el === 'number')
}