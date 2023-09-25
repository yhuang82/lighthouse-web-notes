/* node SubmitEvent.js 1 2 3 4 5
node 1 2 3 4 5.5
node 1 2 3 4 hello */
const args = process.argv.slice(2);


// get arguments
const sum = function (numbers) {
  console.log("args:", numbers);
  //Edge case : 2 least 2 args
  if (args.length < 2) {
    console.log('args:', numbers);
    process.exit();
  }
  //create an accumulator for the sum
  let total = 0;
  //iterate throught the commande line args
  // for of, fo let, forEach
  // Single repsponsibility principle => a function should accomplish one thing

  for (let arg of numbers) {
    const convertedNum = Number(arg)
  // if any arg is not a number, output an error message
    if (isNaN(convertedNum)) {
      console.log(`Error, please enter only numbers`)
      process.exit();
    };

    if (Number.isInteger(convertedNum)) {
      total += convertedNum;
      console.log("arg:", convertedNum, "total:", total);
    }
  }


  // input validation

  // Edge : not a whole num skip it
  // edge : 

  // add each argument

  // print the sum

  return total;
}


const result = sum(args);
console.log("Total:", result);