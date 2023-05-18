/*
    Currying is the process of transforming
    f(a,b,c) callable as f(a)(b)(c)

    Currying can be done using bind method 
    and closures.

    Use Case: Say, we created curried sum(a,b)
    Then we can create other methods, like
    
    let sumByTwo = sum(2);
    let sumByThree = sum(3);

    sumByTwo(5) - will return 7
*/

function multiply(a, b) {
  console.log(a * b);
}

const multiplyByTwo = multiply.bind(this, 2); //By using bind method on regular sum function

multiplyByTwo(5); // 10

function sum(a) {
  // By Closures
  return function (b) {
    console.log(a + b);
  };
}

const sumByTwo = sum(2);

sum(1)(2); // 3
sumByTwo(4); // 6

function curry(fn) {
    
  return function curried(args) {
    return fn.bind(this, args);
  };
}

let multiplyCurried = curry(multiply);

multiplyCurried(4)(5);
