interface IFirst {
    [key: string]: number | string;
}

interface ISecond {
    [key: string]: (...args: any[]) => string
}

interface IThird {
    [key: number]: string
}

interface IFourth {
    name: string

    [key: string]: string
}

interface IFiveth extends IFirst {
    name: string
    age: number;
}


function areValuesNumbers(obj: IFirst): boolean {
    return Object.values(obj).every((el) => typeof el === 'number')
}