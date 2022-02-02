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

fullName()