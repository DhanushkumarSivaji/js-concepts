// we can use multiple statement together in a block so that javascript expects one statement.
if(true){
    //compound statement
    var a = 10;

}

// Block scope means what are all the variable and functions we can access inside the block

{
    var a = 10
    let b = 20
    const c = 30
}

// after line no 14 we cannot access the variable b and c outside the block. because 
// let and const are in block scope whereas
// var is in global scope so you can access it


// shadowing

var sh = 10;

{
    var sh=100;
}

console.log(sh) // the value becomes 100 this is called shadowing, because this both are pointing to the same memory location

// so use let and const , they are hoisted differently



// illegal shadowing

// we cannot shadow a let using var but we can shadow a let using let. This is called illegal shadowing.

let a = 20;

{
    var a = 30 // Uncaught SyntaxError: Identifier 'a' has already been declared.
}

// we can also shalow like this below, this is a valid shadowing

var a = 20;

{
    let a = 20;s
}