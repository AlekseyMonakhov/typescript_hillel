function createReactiveObject(target:any, callback:any) {
  return new Proxy(target, {
      set(obj, prop, value) {
          obj[prop] = value;
          callback(prop, value);
          return true;
      }
  });
}

// Пример коллбека, который вызывается при каждом обновлении объекта
function updateUI(prop:any, value:any) {
  console.log(`Property ${prop} has been set to ${value}`);
}

const user = createReactiveObject({ name: 'John', age: 25 }, updateUI);

user.name = 'Doe'; // В консоли: Property name has been set to Doe
user.age = 30; 
user.lastName ="alex"