const PROP_NAME = 'computedProperty';

interface ComputedInterface {
  [PROP_NAME]: string; // Ошибка: вычисляемые свойства не разрешены в интерфейсах
}

const obj: ComputedInterface = {
  computedProperty: 'a;a;',
};
