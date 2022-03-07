//debounce
function debounce(func,time){
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout( () => func.apply(this,args),time)
    }
}

// throttle
function throttle(func,time){
    let isFlag = true
    return (...args) => {
        if(isFlag){
            isFlag=false
            func.apply(this,args)
            setTimeout(() => {isFlag = true},time)
        }
    }
}

// compose function 
function compose(...fns){
    return (...args) => {
        fns.reduceRight((arg,fn) => fn(arg),args)
    }
}

// infinite currying
function sum(a) {
    return function(b){
        if(b){
            return sum(a+b)
        }
        return a
    }
}

// const sum = (a) => b => b ? sum(a+b) : a 

// pipe function
function pipe(...fns){
    return (args) => {
        fns.reduce((arg,fn) => fn(arg),args)
    }
}

// caching function
function memoizing(fn){
    let res = {}
    return (...args) => {
        let resCache = JSON.stringify(args)
        if(!res[resCache]){
            fn.call(this, ...args)
        }
        return res[resCache]
    }
}


// sentence capitalization
function capitalization(str){
    let words = []

    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase()+word.slice(1)) 
    }

    return words.join(' ')
}

// max char
function maxChar(str){
    let charMap = {}
    let max = 0
    let maxChar = ''
    for(let char of str){
        if(charMap[char]){
            charMap[char] = charMap[char] + 1
        }else{
            charMap[char] = 1
        }
    }
    for (let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

// anagrams
function anagrams(str1,str2){
    return cleanString(str1) === cleanString(str2);
}

function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}

// chunked array
function chunked(arr,size){
    let chunkedArr = []

    for(let element of arr){
        let last = chunkedArr[chunkedArr.length-1]

        if(!last || last.length === size){
            chunked.push([element])
        }else{
            last.push(element)
        }
    }
    return chunkedArr
}

// bubble sort
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if( arr[j] > arr[j+1]){
                let lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    return arr;
}

// array structure
const obj = [
    { name:"Dhanush", age:26 , city:"Karaikal", state:"Pondicherry"}, 
    { name:"Dharma", age:26 , city:"Chennai", state:"Tamilnadu"}
]

let result = obj.reduce((acc,cur) => {
    let { name,age, ...rest } = cur;
    let ex = acc.find(x => x.name === name);
    // if(!ex){
    //    ex = { name,age, address: {} };
    //    acc.push(ex);
    // }
    // ex.address = {...ex.address,...rest}
    if(!ex){
       ex = { name,age, address: [] };
       acc.push(ex);
    }
    ex.address.push(rest)
    return acc;
}, [])


// remove duplicates
function removeDuplicates(){
 let a = ["1","2","2","3","4","5","6"]
 let obj = {}
 for(let i of a){
      obj[i] = true
  }
 let b = Object.keys(obj)
 return b.map(Number)
}

//  callback hell
function getCallback(){
    setTimeout(()=> 
    { console.log(1)
      setTimeout(() => {
        console.log(2)
      },2000)
    },1000)
}

// asynchronous
async function getData(){
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await response.json()
  console.log(data)
}

// findIndexOfOccurances
function findIndexOfOccurances(arr,val){
    let value = arr.reduce((a,e,i) => {
        if(e === val){
            a.push(i)
        }
        return a
    },[])
    return value
}

// getMostFrequent
function getMostFrequent(arr) {
    const hashmap = arr.reduce( (acc, val) => {
     if(acc[val]){
         acc[val] = acc[val] + 1
     } else {
         acc[val] = 1
     }
     return acc;
  },{})
 
 //  console.log(hashmap)
 return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
 }


 //polyfill for bind
 Function.prototype.myBind = function (...args1) {
    let func = this
     return (...args2) => {
        func.apply(args1[0],[...args1.slice(0),...args2])
     }
 }
