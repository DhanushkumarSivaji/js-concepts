// let and const are hoisted in a seperate zone called as script.

// the time which between let and const are hoisted and allocated value is called temporal dead zone.


console.log(a) // Reference Error : Cannot access a before initialization
//console.log(x) // Reference Error : x is not defined

let a = 10;

// let a = 100 Syntax Error: Indentifier a has already been declared.
var b = 100;


let c;

const b;

b = 1000; // Syntax Error missing initializer in const declaration

c = 12;


const d = 10;

d = 5 // TypeError Assignment to a constant variable.


// how to avoid temporal dead zone ?

// always put declarations and initializations at the top of the file / code.

// reference error => when JS engine tries to find out a variable inside the memory space and you cannot access it