type DeepReadonly<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

type UpperCaseKeys<T extends object> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};


var i = 0;
(function(i) {
  console.log(++i)
})(i)
console.log(i);
