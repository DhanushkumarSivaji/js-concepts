
document.querySelector('#grandparent')
    .addEventListener('click',() => {
        console.log("Grand Parent Clicked")
},true)
document.querySelector('#parent')
    .addEventListener('click',() => {
        console.log("Parent Clicked")
},true)
document.querySelector('#child')
    .addEventListener('click',() => {
        console.log("Child Clicked")
},true)


// if we pass true then it's event capturing/trickling
// if we pass false/ just leave it empty then it's event bubbling