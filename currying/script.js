//function currying using bing method
// we make a copy of this multiply method and create more methods out of it by presetting some arguments inside the fn.

// let multiply = function(x,y) {
//     console.log(x * y)
// }

// let multiplyByTwo = multiply.bind(this,2);

// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(this,3);

// multiplyByThree(5)

//function currying using closures

let multiply = function(x) {
    return function(y) {
        console.log(x * y)
    }
}
let multiplyByTwo = multiply(2)
multiplyByTwo(3)
let multiplyByThree = multiply(3)
multiplyByThree(3)

