// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// get the arguments
const args = process.argv.slice(2);
console.log('args:', args);

// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log(`Error, please enter at least 2 arguments`);
  process.exit();
}

// create an accumulator for the sum
let total = 0;

// iterate throught the commande line args
// for of, for let, forEach

for (let arg of args) {
  // Edge case: If any argument is not a whole number, skip it.

  const convertedNum = Number(arg);
  // Edge case: If any argument is not a number, output an error message.
  if (isNaN(convertedNum)) {
    console.log(`Error, please enter only numbers`);
    // stop the execution
    process.exit(); // explicit
  }

  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
    console.log('arg:', convertedNum, 'total:', total);
  }
}

// input validation

// Add each argument

// print the sum
console.log('Total:', total);