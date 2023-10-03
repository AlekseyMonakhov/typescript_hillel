function cb(name: never, age: number): void {
  console.log(age);
}


function test(cd:(name:never, age:number): void):void {
  cd("Alex", 24);
}