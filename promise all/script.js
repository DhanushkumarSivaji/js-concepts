

function showText(text,time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(text)
        },time)
    })
}

function promiseAll(promises){
    let result = []
    return new Promise((resolve,reject) => {
        promises.forEach((p,i) => {
            p.then((res) => {
                result.push(res)
                if(i === promises.length - 1){
                    resolve(result)
                }
            }).catch((err) => reject(err))
        })
    })
}

promiseAll([showText("hello",1000),Promise.resolve("hi"),Promise.resolve("there")]).then((val) => console.log(val))