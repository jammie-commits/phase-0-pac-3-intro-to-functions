// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
  }
  sayHello();

  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe()

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  sayHelloToLiz()

  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1);

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "hello");
  say("Goodbye", "Julio");

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "John"));