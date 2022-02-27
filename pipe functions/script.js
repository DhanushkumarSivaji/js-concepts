function addByFive(val){
    return val + 5;
}

function subtractByTwo(val){
    return val - 2;
}

function multiplyByFour(val){
    return val * 4;
}

// console.log(multiplyByFour(subtractByTwo(addByFive(5)))) => 32

let pipe = function(...fns){
    return (args) => {
        return fns.reduce((arg,fn) => fn(arg),args)
    }
}

let evaluate = pipe(addByFive,subtractByTwo,multiplyByFour);

console.log(evaluate(5))
