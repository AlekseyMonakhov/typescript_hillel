const testValue = 'string';
const testArr = ['string', 'secondString', 3, 2, { key: 'test key' }];

function isString(value: unknown): value is string {
  return typeof value === 'string';
}
function isNumber(value: unknown): asserts value is number {
  if (typeof value !== 'number') throw new Error('not a number');
}

function isFunction(value: unknown): value is () => void {
  return typeof value === 'function';
}

function isWebdeveloper(value: object): value is WebDeveloper {
  return value instanceof WebDeveloper;
}
// first
function testStringGuard(value: unknown): string {
  if (isString(testValue)) {
    return 'this is string';
  }
  return 'not string';
}

//second
const mapedArr = testArr.filter(isString);

const testObj = {
  key: 'test value',
  secondKey: 1,
};

//third
function getObjStringKey(obj: object): string | void {
  const objValues = Object.values(obj);

  if (!objValues.length) {
    return 'no values in obj';
  }

  const stringValues = objValues.filter(isString);

  if (stringValues.length) {
    return stringValues[0];
  }
}

//fourth
function objHasNumberAndStringValue(obj: object): string {
  const values = Object.values(obj);

  for (const value of values) {
    if (isString(value)) {
      return 'this is string';
    }

    isNumber(value);

    return 'this is number';
  }

  return 'Arr is empty';
}

//fiveth
function unionTypeCheckFunction(value: string | number): void {
  if (isString(value)) {
    value.toLowerCase();
  }

  isNumber(value);

  value.toFixed();
}

//sixth
function testFunctionGard(value: unknown): void {
  if (isFunction(value)) {
    value();
  }
}

//last
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

class WebDeveloper extends Person {
  constructor(
    public name: string,
    public age: number,
    public skill: string
  ) {
    super(name, age);
  }
}

function testWebDeveloperGard(value: object): string {
  if (isWebdeveloper(value)) {
    return value.skill;
  }
  return 'no web developer';
}
