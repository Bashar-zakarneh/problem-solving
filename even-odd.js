//! Create a function that takes an Integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers...!

/*
 1-create function
 2-if statment for chek the number if odd or even.
 3- return the result
 */

// ? Solution [1] ==> if statment

function evenOdd(number) {
  if (number % 2 === 0) {
    return "Even" + "   " + number;
  } else {
    return "Odd" + "   " + number;
  }
}

console.log(evenOdd(5));
console.log(evenOdd(6));
console.log(evenOdd(7));
console.log(evenOdd(8));

// ? Solution [2] ==> Ternary Operator

function evenOdd2(value) {
  return value % 2 === 0 ? "Even   " + value : "Odd    " + value;
}
console.log(evenOdd2(5));
console.log(evenOdd2(6));
console.log(evenOdd2(7));
console.log(evenOdd2(8));
