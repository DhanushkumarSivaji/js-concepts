let name = {
    firstname: "Dhanush",
    lastname: "kumar"
}

let printFullName = function(hometown,state) {
    console.log(this.firstname+' '+this.lastname+" "+hometown+" "+state);
}

"Call - here arguments to the functions are passed in comma seperated conditions "
printFullName.call(name,"Karaikal","Pondicherry")

"Apply - here arguments are passed as array of elements"
printFullName.apply(name,["Karaikal","Pondicherry"])

"Bind - here it binds the function to the variable which can be invoked later"
let fullName = printFullName.bind(name,"Karaikal","Pondicherry");

fullName();

function debounce(func,time) {
    let timer;

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this,args)},time)
    }
}

function throttle(func,timer){
    let flag = true;

    return (...args) => {
        if(flag){
            flag = false
            func.apply(this,args)
            setTimeout(() => { flag = true},timer)
        }
    }
}

function caching( func ){
    let res = {}

    return (...args) => {
        let result = JSON.stringify(args);

        if(!res[result]){
            func.call(this,...args)
        }

        return res[result];
    }

}

function compose(fns) {
    return (...args) => {
        fns.reduceRight((arg,fn) => fn(arg),args)
    }
}

function pipe(fns) {
    return (args) => {
        fns.reduce((arg,fn) => fn(arg),args)
    }
}

function maxChar(str){
    let charMap = {}
    let max = 0
    let maxChar = ''

    for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar;
}

function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if( arr[j] > arr[j+1]){
                let lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = lesser
            }
        }
    }

    return arr
}

function chunked(arr,size) {
    let chunked = []

    for(let element of arr) {
        let last = chunked[chunked.length - 1]

        if(!last || last.length === size){
            chunked.push([element])
        }else{
            last.push(element)
        }
    }

    return chunked
}