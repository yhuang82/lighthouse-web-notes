# Yiqun's Notes

## Summary 

This repository contains all of the notes taken by [Yiqun Huang](https://github.com/yhuang82) for the Lighthouse Labs Web Development Bootcamp.

* [Week 1](/Week_1)
  * [Day 1](/Week_1/Day_1)


```javascript
const args = process.argv[2];
const rollDice = function(number) {
  let i = 0;
  const diceArr = [];
  while (i < number) {
    let dice = Math.floor(Math.random() * 5 + 1);
    diceArr.push(dice);
    i++;
  }
  const result = diceArr.join(", ");
  console.log(`Rolled ${number} dice: ${result}`);
};
rollDice(args);
```