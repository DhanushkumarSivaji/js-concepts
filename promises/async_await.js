async function getPosts() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    console.log("hey man")
    return data;
}


getPosts()

