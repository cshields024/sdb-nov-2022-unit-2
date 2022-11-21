const helicopter1 = 'BlackHawk';
const helicopter2 = 'bLaCkHawk';
const stringThree = '3'
const numberThree = 3

console.log(helicopter1.toUpperCase === helicopter2.toUpperCase)

console.log(stringThree == numberThree)
//with two == we get true
console.log(stringThree === numberThree)
//with three === we get false because they are not 'strictly' equal strictly meaning it checks for both 'type' and 'value'

// Not operator
// != only looks at the value and doesn't care about the data type
console.log(helicopter1 != helicopter2);
console.log(stringThree !== numberThree)

//greater than
console.log("10">2)

//greater than or equal >=

console.log(4 >= 4)

// Logical Operators
const num1 = 6;
const num2 = 3;

console.log(num1 < 10 && num2 > 1)
console.log(num1 === 10 || num2 === 1)

let fruit = "apple";
let snack = fruit;
console.log(snack)
fruit = "pear"
console.log(snack)
console.log(fruit)