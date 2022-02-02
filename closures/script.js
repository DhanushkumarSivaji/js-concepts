// function along with its lexical environment bundled together forms the closure

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