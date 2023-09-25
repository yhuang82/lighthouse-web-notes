const assert = require("chai").assert;
// const funcObj = require("../hello-world");

const { sayHello, sayGoodbye } = require("../hello-world");
// when you do sayHello require it will run the say Hello code implicity run the sayHello



  
  
// describe make tests to group
describe('salutation tests', () => {


  it("returns an appropriate salutation", () => {
    const actual = sayGoodbye("to my little friend");
    const expected = "Goodbye, to my little friend!";
    console.log("actual", actual);

    assert.equal(actual, expected);
  });
  
  it('returns an appropriate salutation', () => {
    const actual = sayHello("to my little friend");
    const expected = "Hello, to my little friend!";
    console.log("actual", actual);

    assert.equal(actual, expected);


  })});