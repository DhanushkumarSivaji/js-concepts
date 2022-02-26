// Example 1

// const posts = [
//     {title:"Post One",body:"This is post one"},
//     {title:"Post Two",body:"This is post two"},
// ]

// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index) => {
//              output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     },1000)
// }

// function createPosts(post){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             posts.push(post)
//             const error = false;
//             if(!error){
//                 resolve()
//             }else{
//                 reject("Error: Something Went Wrong")
//             }
//         },2000)
//     })

// }



// createPosts({title:"Post Three",body:"This is post three"}).then(getPosts).catch(err => console.log(err))


// Example 2

// function getPosts() {

//     let posts = new Promise((resolve,reject) => {
//         let data = fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(err  => reject(err))
//         console.log("hey man")
//         return data
//     })

//     return posts;
// }


// getPosts().then((data) => console.log(data)).catch(err => console.log(err))

//Example 3

// const p1 = Promise.resolve("Hello World")
// const p2 = 10;
// const p3 = new Promise((resolve,reject) => setTimeout(resolve,3000,"Hey There"))
// const p4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

// Promise.all([p1,p2,p3,p4]).then(values => console.log(values))