// // io & callbacks

// /* 
// * Process is an event that currently runs in the background or foreground of your machine. 
// * Node allows access to its processes via a process object
// */

// // Import statement ex:

// // let process = require("process")
// // console.log(process.pid)

// // Callback
// /* 
// A "listener" function that waits for an event and executes a function when it occurs. 
// */




// // Event listener

// /* 
// A function/method that listens for an event to occur. When it happens, it triggers a callback function. 
// */



// // takes two parameters:
// /* 
// -Event
// -callback function
// */










// // process.stdin.on("data", (input) => {
// //     console.log("This is our input being repeated", input.toString())
// //     // Exits us out of the listener
// //     process.exit()
// // })

// /* 
// Back to function event

// Function decalration
// */

// function navmeOfFunction(parameter) {
//     return parameter
// }

// //function expressions
// //not hoisted

// let funcExpression = function(parameter) {
//     return parameter
// }

// // Arrow function expression

// // not hoisted; not bound to .this or apply
// //concise body arrow function
// // in concise arrow function return statement is implicit
// const arrow = () => console.log('mupp')
// arrow()

// /* 
// if func has only 1 param then you dont need ()
// if more than one param then you need ()
// */

// const arrow1 = param1 => console.log('only one param')
// const arrow2 = (param2, param3) =>  console.log('multiple params')

// // ex
// process.stdin.on('data', input => console.log(input.toString()));

// // block body arrow function. Basically the same we just use the curly boys 
// // ! No implicit return! must have return statement. 

// const blockBody = () => {
//     //code goes here
// }

// (function() {
//     console.log('hello from iife')
// })()

// // lets create a listener on stdin so that when we type it will reply with what we said plus some word

// let handleInput = input => {
//     console.log(input.toString().trim() + ", cheers!")
// }

// process.stdin.once("data", handleInput)
// console.log('what is your name?')
// process.stdin.on("data", (input) => {
//     process.stdout.write(`the input is ${input.toString()}`)
// })

// !Guess the number hint

// function guess(question) {
//     console.log(question)
//     let number
//     process.stdin.once("data", (input) => {
//         number = input.toString().trim()
//         process.stdout.write(`your number was ${number}`)
//     })
//     return number
// }

// guess('what is your number?')


// !Readline

const readline = require("readline");

let rl = readline.createInterface({ input: process.stdin, output: process .stdout })


let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let solution = num1 + num2
async function test() {
    setTimeout(() => {
        console.log('test func')
    }, 13000)
}
test()
rl.question(`What is the sum of ${num1} & ${num2}?`, (input) => {
    if (input.trim() == solution) {
        rl.setPrompt("correct")
        rl.prompt()
        rl.close()
    }
})

rl.on("close", () => console.log("Thanks for playing"))

