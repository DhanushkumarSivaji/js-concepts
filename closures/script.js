// function along with its lexical environment bundled together forms the closure.In other words, a closure gives you access to an outer function’s scope from an inner function

function x() {
    var a = 7;
     function y() {
         console.log(a);
     }
     return y;
}

var z = x();

console.log(z())
//..... after thousands of line. when u invoke z() it still prints 7. but after return the whole execution context is 
// destroyed but because of closure we can achieve this



// Disadvantages of closure

 

// Closures prevent variables inside functions from being released by memory. These variables will occupy memory and consume a lot of memory, which may lead to memory leakage

// The solution to this problem is to delete all unnecessary local variables in time when these variables are not used