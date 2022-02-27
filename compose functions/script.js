function addByFive(val){
    return val + 5;
}

function subtractByTwo(val){
    return val - 2;
}

function multiplyByFour(val){
    return val * 4;
}

// console.log(addByFive(subtractByTwo(multiplyByFour(5))))

let compose = function(...fns){
    return (...args) => {
        return fns.reduceRight((arg,fn) => fn(arg),args)
    }
}

let evaluate = compose(addByFive,subtractByTwo,multiplyByFour);

console.log(evaluate(5))
