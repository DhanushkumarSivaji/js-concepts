
// document.querySelector("#category").addEventListener('click', (e) => {
//     console.log()
//     if(e.target.tagName='LI'){
//         window.location.href = "/" + e.target.id;
//     }
// })


document.querySelector("#form").addEventListener('keyup', (e) => {
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase()
    }
})

// when we are using event delegation we are attaching only single event listener this saves lot of memory
// writting less code

// some event like blur, focus, rezise etc.. will not bubble up we need to handle them seperaterly