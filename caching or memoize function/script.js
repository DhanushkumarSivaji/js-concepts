function memoize(fn){
    const res = {};
     return function(...args){
         var argsCache = JSON.stringify(args)
         if(!res[argsCache]){
             res[argsCache] = fn.call(this, ...args)
         } 
        return res[argsCache]
     }
}

function clumsyProduct(num1,num2){
    for(let i = 1; i <=10000; i++){}
    return num1*num2;
}

const memoizedClumzyProduct = memoize(clumsyProduct)

console.time("First call")
console.log(memoizedClumzyProduct(5,5));
console.timeEnd("First call")

console.time("Second call")
console.log(memoizedClumzyProduct(5,5));
console.timeEnd("Second call")

