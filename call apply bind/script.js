let name = {
    firstname: "Dhanush",
    lastname: "kumar"
}

let printFullName = function(hometown,state) {
    console.log(this.firstname+' '+this.lastname+" "+hometown+" "+state);
}

Function.prototype.myCall = function (currentContext = {}, ...arg) {
    if (typeof this !== 'function') {
      throw new Error(this + "it's not callable");
    }
    currentContext.func = this;
    currentContext.func(...arg)
  };

Function.prototype.myApply = function (currentContext = {}, arg = []) {
    if (typeof this !== 'function') {
      throw new Error(this + "it's not callable");
    }
    if (!Array.isArray(arg)) {
      throw new TypeError('CreateListFromArrayLike called on non-object')
    }
    currentContext.fn = this;
    currentContext.fn(...arg);
  };

Function.prototype.myBind = function (...args1) {
    let func = this
     return (...args2) => {
        func.apply(args1[0],[...args1.slice(0),...args2])
     }
 }

 "First argument will always be the reference to this"

"Call - here arguments to the functions are passed in comma seperated conditions "
printFullName.myCall(name,"Karaikal","Pondicherry")

"Apply - here arguments are passed as array of elements"
printFullName.myApply(name,["Karaikal","Pondicherry"])

"Bind - here it binds the function to the variable which can be invoked later"
let fullName = printFullName.bind(name,"Karaikal","Pondicherry");

fullName();


// call => is called function borrowing