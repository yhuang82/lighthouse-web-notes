


// create a function that will swap values between two objects
// function will take four parameters - key1 (string), object1 (object), key2 (string), object2 (object)
const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");
  
  if (!object1[key1] || !object2[key2]) {
    console.log("provide an valid key or check your input");
  }
  const valueFromObject2 = object2[key2];
  const valueFromObject1 = object1[key1];

  object2[key2] = valueFromObject1;
  object1[key1] = valueFromObject2;
  // fetch the value stored in key1 in object 1
  // take the original value stored in key2 of object2
  
  // store that value in key2 of object 2
  
  // store that value in key1 of object1
  
  
  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

// no need to return anything

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

// Swap!
// object1: { a: 5 , b: 2, c: 3 }
// object2: { a: 4, b: 3, c: 1 }
// Swap!
// object1: { a: 8 , b: 12, c: 6 }
// object2: { a: 5, b: 1, c: 2, d: 7}
// Swap!
// object1: { a: 1 , b: 3, c: 5, d: 7 }
// object2: { a: 4, b: 0, c: 3 }