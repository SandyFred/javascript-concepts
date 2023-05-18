/*
    variable declared with var and Function Declaration
    are hoisted to the top of their enclosing function
    or global scope

     function  a() {  //Function Declaration

    }

    const a = function() { // Function Expression

    }

    By default, if you dont return anything from 
    function, they return undefined.

    Note that only Function Declarations are hoisted
    and not function expressions.
*/


console.log(hoisted());
console.log(hoisted);
// hoisted2(); // Cannot access 'hoisted 2' before initialization

function hoisted() {
    console.log('hoisted');
}

const hoisted2 = function() {
    console.log("Not Hoisted");
}