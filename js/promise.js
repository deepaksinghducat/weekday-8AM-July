// Promise
let promise = new Promise((resolve,reject) => {

    resolve('completed')
    
});

promise.then(response =>{
    console.log(response);
}).catch(error => {
    console.log(error);
})


let newPromise = new Promise((resolve,reject) => {
    let response = fetch(`https://restcountries.com/v3.1/all`);

    resolve(response)
    // setTimeout(() => {
    // },500);
});

newPromise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

console.log("outer part")