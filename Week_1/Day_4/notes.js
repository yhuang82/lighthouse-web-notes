// benefits of arrow function
// 1. no function keyword
// 2. if only one arument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly BroadcastChannel, the line of code is implicityly returned
// 5. arrow funcs do not create `this`

if (true) console.log('hello')

const doubleIt = x => x * 2;


const sayHello1 = function(name) {
  console.log(`hello there ${name}`);
}

const sayHello2 = name => {
  console.log(`hello there ${name}`);
}

const sayHello3 = name => console.log(`hello there ${name}`);

const returnVal = sayHello2('elise');
console.log('returnVal'. returnVal)



// justification:
// single responsiblity:
// for Each
const myFunc = function(arr, callback) {
  for (const element of arr) {
    callback(element);
  }
};

const names = ['alice', 'bob']

const callback = function(name) { console.log(`goodbye ${name}`)}
myFunc(names, callback)





names.forEach(function(name, index, ogArray) {

  console.log(`goodbye ${name}`)
})




myFunc([1,2,3], function(num) {console.log(num * 2)})

// forEach => iteriter an Array
// map => returns an array the same length with the emelments 
// TransformStreamDefaultController
// filter => removing something; return a smaller array
// reduce => reduces an array down to a single value

// map func
const ourMap = function(arr, callback) {
  //create an output array
  const output = [];

  //loop throught the provided array
  for (let i = 0; i < arr.length; i++) {
    // grab the current element
    const element = arr[i];

    // call the provided callback with element and index and capture the return value
    const returnVal = callback(element, i, arr);

    

    // push to the oupput
    output.push(returnVal);
  }
  return output;
}