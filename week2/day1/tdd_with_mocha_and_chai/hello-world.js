//imp a func called sayHello that takes the name of the saluted entity and return that would be said


const sayHello = (name) => {
  const returnValue = `Hello, ${name}!`;
  return returnValue;
};

const sayGoodbye = (name) => {
  const returnValue = `Goodbye, ${name}!`;
  return returnValue;
};
// show some test code here, and then factor it out later

//make the function exportable
module.exports = {
  sayHello: sayHello,
  sayGoodbye: sayGoodbye
};

console.log("ending of the production code");