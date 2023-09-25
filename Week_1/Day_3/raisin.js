const raisinAlarm = function(cookie) {
  // Put your solution here

  // loop to assess each item in our storage variable
  for (const item of cookie) {

    // validation of criteria
    // console.log(item);
    if (item === "🍇") {

      // assine the value to be returned
      return "Raisin alert!";
    }
  }

  return "All good!";



  // return our value


};

const raisinAlarmArray = function(cookies) {
  // Put your solution here

  const result = [];
  for (const item of cookies) {
    const alertMess = raisinAlarm(item);
    result.push(alertMess);
  }
  return result;  
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);



// expected: ["Raisin alert!", "Raisin alert!", "All good!"]
// what we got: [ 'Raisin alert!', 'Raisin alert!', 'All good!' ]
// create an empty array[] to store result
// for loop raisinAlamArry
// do someting the each elem in raisinAlamArry; we should call the helper
// resulst push

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


// Raisin alert!
// Raisin alert!
// All good!

// The difference you are seeing is due to formatting differences in various JavaScript environments. Different JavaScript engines may print strings in an array with single or double quotation marks, but they fundamentally represent the same thing.
// So, an array shown as ['A', 'B', 'C'] is identical to an array shown as ["A", "B", "C"].
// You should focus on the correctness of the output more than the type of quotation used. Your output, with single quotes, is still correct and matches the expected behavior perfectly.
// In other words, as far as language semantics are concerned, 'Raisin alert!' and "Raisin alert!" are identical strings.
// Does this make it clear why there's a difference in the output, and do you understand why your output is still correct?
