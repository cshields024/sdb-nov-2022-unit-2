/* 
Types- Data Types

- Strings
- Boolean (truthy and falsey)
- Numbers
*/

/* 
Strings
- Are data types used to represent text and are wrapped in single quotes, double quotes, or back ticks.
*/

const stringOne = "double quotes"
const stringTwo = 'single quotes'
const stringThree = `back ticks`
// use a comma to seperate two variables for printing to the console.
console.log(stringOne, stringTwo);

//! adding strings together
console.log(stringOne + stringTwo) // output: double quotessingle quotes

// ! the fix
console.log(stringOne + " " + stringTwo)

// using back ticks

console.log(`${stringOne} ${stringTwo}`) // output: double quotes single quotes

// ! challenge string

const greeting = "Good Afternoon";
const firstName = "Conor";

console.log(`${greeting} ${firstName}`)

//! if you want to know what data type a variable is you can use
// ! typeof

console.log(typeof greeting);




console.log(moneyOne + moneyTwo)
// combining two or more strings is called concatenation. 

/* 
Numbers 
-
*/

let currentTemp = 50;
console.log(currentTemp)

let calculatedTip = 50 * .25

console.log(calculatedTip.toFixed(2));

// toFixed lets us say how many decimals to go to.

// ! convert strings to numbers
// Number()


console.log(Number(moneyOne) + Number(moneyTwo))

//! convert strings to numbers method 2
//add a plus to the start of the variable
const moneyOne = "20"
const moneyTwo = "10"
console.log(+moneyOne + +moneyTwo)

/* 
Booleans:
- Only two possible values True or False
*/

const isOver21 = true
console.log("isOver21", isOver21);
const isTeenager = false 
console.log("typeof", typeof isOver21)

/* 
Null
- Null is an empty value.
- think of it as we have an empty container - nothing is in it but it exists as space to fill later on. 
*/

let isLoggedIn = null

/* 
undefined 
- No value is assigned and does not act like an empty container
*/

var myName 

// because we did not assign it the default is undefined. 

var myLastName = undefined
const notANumber = 15/"name"
//Using Boolean we can check to see if a variable contains data
//undefined, null, 0, NaN, empty string quotes will all produce a false
console.log(Boolean(myLastName)); // false
console.log(Boolean(isLoggedIn)); //false
console.log(notANumber); // NaN


