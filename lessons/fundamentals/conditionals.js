// /* 
// Conditionals

// -Used for decision making. 
// -Tools we have available are the following:
//     -if statement
//     -if else statement
//     -if else if statement
//     -switch
//     -ternary
// */

// // If statement example

// var currentTime = 20
// var greeting = ""
// // block of code that get executed if the conditional is true
// if (currentTime < 12) {
//     // block of code that get executed if the conditional is true
//     greeting = 'good morning'
//     //block of code that gets executed if it is not true. 
// } else if (currentTime >= 12 && currentTime <= 17) {
//     // block of code that get executed if the conditional is true
//     greeting = 'good afternoon'
//     //final block of code to be executed can be viewed as a default condition if nothing matches
// } else {
//     greeting = 'good night'
// }

// console.log(greeting)

// // Code refactoring

// var isLightBulbOn = false

// if(isLightBulbOn == true) {
//     console.log("yes light is on")
// }

// // Refactored code
// if(isLightBulbOn) {
//     console.log('yes light is on')
// }

// // if the light is off
// if(isLightBulbOn != true) {
//     console.log('no light is off')
// } 

// if(!isLightBulbOn) {
//     console.log("refactored no light is off")
// }
// var today = new Date()
// // let seconds = today.getSeconds()
// // console.log(seconds)
// var currentSeconds = today.getSeconds();

// if (currentSeconds % 2 === 0) {
//     console.log(`the current seconds is ${currentSeconds} and is even`)
// } else {
//     console.log(`the current seconds is ${currentSeconds} and is odd`)
// }

// //! ternary statements

// var age = 20

// age >= 21 ? console.log('beer') : console.log('juice')

// const arr = ['a', 'b', 'c', 'd', 'e']

// ! switch statement

var month = "Dec"
var totalNumberOfDays = 0
switch (month){
    case "Dec":
    case "Jan":
        totalNumberOfDays=31;
        break;
    //     totalNumberOfDays=31;//because jan and dec have same num of days we can combine cases
    //     break;
    case "Feb":
        totalNumberOfDays=28;
        break;
    default:
        totalNumberOfDays = "Months did not match"
}

console.log(totalNumberOfDays)

const arr = ['a', 'b', 'c', 'd', 'e']

