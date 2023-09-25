const ageCheckFuntionDefinition = function(){
  if (this.age >= 18){
    return true;
  };
  return false;
};

const voter1 = {
  name: 'Barb',
  age: 44,
  didVote: false,
  response: 'Trump',
  ageCheck: ageCheckFuntionDefinition
};



const voter2 = {
  name: 'Sandy',
  age: 15,
  didVote: true,
  response: 'Biden',
  ageCheck: ageCheckFuntionDefinition
}
console.log('voter1.ageCheck()', voter1.ageCheck());
console.log('voter2.ageCheck()', voter2.ageCheck());




const voter3 = {
  name: 'Monkey',
  age: 21,
  didVote: true,
  response: 'Bide',
  ageCheck: ageCheckFuntionDefinition
}

const voter4 = {
  name: 'NALLY',
  age: 21,
  didVote: true,
  response: 'Ross',
  ageCheck: ageCheckFuntionDefinition
}
//compact code for dealing with multiple voter objects


console.log('voter1.name', voter1.name);

const voters = [voter1, voter2, voter3];


for (let ii = 0; ii < voters.length; ii++) {
  console.log('voters[' + ii + '].name', voters[ii].name);
};

// voters[ii] = the iith element of the array

//how to get 
console.log('voter4.name', voter4.name);
console.log("voter4['name']", voter4['name']);

// loop over an objects properties

for (let key in voter4){
  console.log(`porperty name = ${key}`);
  console.log(`value of voter4['${key}'] = ${voter4[key]}`)
};


// passing parameter values into funciton

function isOldEnoughtToVote(age) {
  if (age < 18) {
    age = 18;
  }
  if (age >= 18) {
    return true;
  }
  return false;
}
console.log(`voter2 is old enought to vote:
 ${ isOldEnoughtToVote(voter2['age'])}`);
 console.log(`OV: voter2 is old enought to vote:
 ${voter2.age}`);

console.log('---------------------')


 function isOldEnoughtToVoteObjectVersion(voter) {
  if (voter.age < 18) {
    voter.age = 18;
  }
  if (voter.age >= 18) {
    return true;
  }
  return false;
}

console.log(`OV: voter2 is old enought to vote:
 ${ isOldEnoughtToVoteObjectVersion(voter2)}`);

 console.log(`OV: voter2 is old enought to vote:
 ${voter2.age}`);