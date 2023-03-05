const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10
    if (num < 5) {
        resolve(4343434)
    }
    // resolve(545454) 
    else {
        reject("No date Available")

    }
})
getData
    .then(data => console.log(data + 22))
    .catch(err => console.log(err))
