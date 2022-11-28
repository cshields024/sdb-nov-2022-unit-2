// Why do we need async programming?

function getInfo() {
    // this return works because it is immediate
    // return "Conor S. DOB 10/24/87"

    //This doesnt work because return occurs 3 seconds after.
    setTimeout(() => {
        return "Conor S. DOB 10/24/87"
    }, 3000)
}

let data = getInfo()

console.log(typeof data, data)

// ! Promises

/* 
-An object that may produce a single value in the future.
-Three stages of promises
    -Pending (unfinished)
    -Fulfilled (completed)
    -Rejected (Error)
*/

let myPromise = new Promise((resolve, reject) => {
    let sum = 1 + 1
    sum ==  3 ? resolve("success") : reject('failed')
    setTimeout(() => {
        let sum = 1 + 1
        sum ==  3 ? resolve("success") : reject('failed')
    }, 3000)
})
// when we console.log typeof myPromise we see that it is an object.
console.log(typeof myPromise, myPromise)

myPromise
    .then(msg => console.log(msg))
    .catch(err =>  {
        console.log(err)
    })
    // If you want to run code before the promise is resolved or rejected and you want to stay within the scope of the promise. Must be wrapped in a callback function in order to run after resolve or reject. 
    .finally(() => console.log("code runs after"))

// ! this is just the example from out number game boiler plate. 
// const { read } = require('fs')
// const { stdout } = require('process')
//     const readline = require('readline');

//     const rl = readline.createInterface({ input: process.stdin, output: stdout })

//     function askQuestion(question) {
//         return new Promise((resolve, reject) => {
//             rl.question(question, resolve)
//         })
//     }

// ! Async functions

/* 
-Different way to write promise based asynchronous code. 
-Uses aync/await syntax to replace Promise resolve & reject. 
*/

// ! async function syntax

// /* 
// - async function myFx() {}
// -let myFx = async function() {}
// -let myFx = async() => {}
// */


function theOGFunction() {
    return "OG function"
}
console.log(theOGFunction())


async function asyncFx () {
    return "async fx"
}

let asyncFxResult = asyncFx()
asyncFxResult
    .then(data => console.log(data))
console.log(asyncFxResult)

console.log(asyncFx()) // returns a promise

// ! Async functions always return a promise.

// ! Await 
/* 
- Tells our function that a value being returned is a promise
- Tells our function that we must wait until the promise is fulfilled. 
*/
let db = "SSN: 123-45-6789"

let dbCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        db ? resolve(db) : reject("no data found")
    }, 3000)
})

// dbCall
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

async function displayData() {
    try {
        let dbResult = await dbCall
        console.log(dbResult)
        // real life example
        // let h1 = document.createElement("h1")
        // h1.innerText = dbResult
        // document.body.appendChild(h1)
    }
    catch(err) {
        console.log(err)
    }
}

displayData()