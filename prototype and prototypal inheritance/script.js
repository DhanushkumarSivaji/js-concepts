// Whenever you can create anything in JS like (Array, Object, Functions). 
//JS engine will attach on object to it which has properties and method we can access to.
// this is called prototype. which use can access using __proto__ (eg: parent.__proto__) even this parent.__proto__ will have a __proto__
// i.e parent.__proto__.__proto__

const arr = ["Dhanush","Kumar"]
const obj = {

}

function func(){

}

arr.__proto__ // => Array.prototype
arr.__proto__.__proto__ // Object.prototype
arr.__proto__.__proto__.__proto__ // null

// arr => Array.prototype => Object.prototype => null
// this is called Prototype chain


obj.__proto__ // Object.prototype
obj.__proto__.__proto__ // null


func.__proto__ // => Function.prototype
func.__proto__.__proto__ // Object.prototype
func.__proto__.__proto__.__proto__ // null


// Everything in JS is nothing but an object



// Prototypal Inheritance

let parent = {
    surname: "Sivaji",
    native: "Poraiyar"
}

let child = {
    name:"Dhanush"
}

child.__proto__ = parent

// Here you have modified the child object proto to parent. so when you try to acess child.surname
// it will first tries to find the surname in child object if it's not there then it will go to
// parent object. This is called Prototypal inheritance => child inheriting the properties from
// parent


let object = {
    name: "Dhanush",
    city: "Karaikal",
    getIntro: function(){
        console.log(this.name + " from " + this.city)
    }
}

let object2 = {
    name: "Dharma"
}

object.__proto__ = object2

// object2.getIntro() => "Dharma from Karaikal"