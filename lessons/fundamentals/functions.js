/* 
-Functions provide a block of code that will only run when it is called upon.
-It starts with the keyword function followed by the name that you give it. 
-Functions do not need to have parameters.
-Functions do not need to return a value, but often do.
*/

/* 
1. key word function
2. function name (Came case rules)
3. No params expected.
*/
// (1)      (2)  (3)
//Functions are hoisted meaning they can be called before declaration. The functin declaration is moved to the top of the file at compile time. 

example1()
function example1() {
    console.log('hello')
}

example1();

/* 
Function with parameters:


*/
//  (1)    (2)           (3)
function example2(param1, param2) {
    console.log(param1 + param2);
    console.log(param2)
}
example2(2, 5);


function add (num1, num2) {
    let total = num1 + num2
    // console.log(sum)
    return total
}
let sum = add(1, 3) 

console.log(sum)