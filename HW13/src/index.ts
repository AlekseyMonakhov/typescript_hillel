function DeprecatedMethod(reason: string, otherMethod?: string) {
  return <T, A extends any[], R>(
    originalMethod: (this: T, ...args: A) => R,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
  ) => {
    if (context.kind !== 'method') {
      throw new Error('This decorator can only be applied to methods');
    }

    function replacementMethod(this: T, ...args: A) {
      console.warn(
        `Method ${context.name.toString()} is deprecated because ${reason}. ${
          otherMethod ? `Use ${otherMethod} instead.` : ''
        }`
      );
      return originalMethod.apply(this, args);
    }

    return replacementMethod;
  };
}

function MinLength(length: number) {
  return (target: any, propertyKey: string) => {
    let value = target[propertyKey];

    Reflect.defineProperty(target, propertyKey, {
      get() {
        return value;
      },
      set(newVal: string) {
        if (newVal.length < length) {
          console.error(`Error: The value of ${propertyKey} should be at least ${length} characters long.`);
        } else {
          value = newVal;
        }
      },
      enumerable: true,
      configurable: true,
    });
  };
}

function MaxLength(length: number) {
  return (target: any, propertyKey: string) => {
    let value = target[propertyKey];

    Reflect.defineProperty(target, propertyKey, {
      get() {
        return value;
      },
      set(newVal: string) {
        if (newVal.length > length) {
          console.error(`Error: The value of ${propertyKey} should be at most ${length} characters long.`);
        } else {
          value = newVal;
        }
      },
      enumerable: true,
      configurable: true,
    });
  };
}

function Email(target: any, propertyKey: string) {
  let value = target[propertyKey];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  Reflect.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newVal: string) {
      if (!emailRegex.test(newVal)) {
        console.error(`Error: The value of ${propertyKey} is not a valid email address.`);
      } else {
        value = newVal;
      }
    },
    enumerable: true,
    configurable: true,
  });
}


class User {
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @Email
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
