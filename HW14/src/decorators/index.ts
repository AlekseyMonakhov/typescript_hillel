export function NotEmpty<T, V extends string>(originalProp: undefined, context: ClassFieldDecoratorContext<T, V>) {
  if (context.kind !== 'field') {
    throw new Error('@NotEmpty can only be used on class fields');
  }

  function updatedProp(this: T, originalValue: V) {
    if (originalValue.length === 0) {
      throw new Error(`Property cannot be empty`);
    }
    return originalValue;
  }

  return updatedProp;
}
