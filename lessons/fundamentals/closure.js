/* 
Introduction to JavaScript closures:

In javascript a closure is a function that references variables in the outer scope from its inner scope. 

Lexical Scoping:

Lexical scoping defines the scope of a variable by the position declared in the source code. For exampel:
*/

let name = 'John';

function greeting() {
  let message = "Hi"
  console.log(`${message} ${name}`);
}

/*                          
-The variable name is a global variable. It is accessible from anywhere including within the greeting() function.
-The variable message is a local variable that is accessible only within the greeting() function.

If you try to access the message variable outside the greeting() function, you will get an error. 

The JavaScript engine uses the scope to manage the variable accessibility. 

According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. For example. 
*/

function greeting () {
  let message = 'hi';

  function sayHi() {
    console.log(message);
  }
  sayHi();
}
greeting();

/* 
The greeting() function creates a local variable named message and a function named sayHi().
sayHi() is the inner function that is available only within the body of the greeting() function. 
The sayHi() function can access the variables of the outer function such as the message variable of the greeting() function. 
Inside the greeting() function, we call the sayHi() function to display the message 'hi'.

JavaScript closures:

Lets modify the greeting() function:
*/

function greeting() {
  let message = 'Hi';

  function sayHi() {
    console.log(message);
  }
  return sayHi;
}
let hi = greeting()
hi();

/* 
Now, instead of executing the sayHi() function inside the greeting() function the greeting() function returns the sayHi() function object. 

Note: functions are first-class citizens in JavaScript, therefore you can return a function from another function. 

Outside of the greeting() function we assigned the hi variable the value returned by the greeting() function, which is a reference of the sayHi() function. 

Then we executed the sayHi() function using the reference of that function: hi(). if you run the code, you will get the same effect as the one above. 

However the interesting point here is that normally a local variable only exists during the execution of the function. It means that when the greeting() function has completed executing, the message variable is no longer accessible. In this case, we execute the hi() function that references the sayHi() function, the message variable still exists. The magic of this is closure. In other words, the sayHi() function is a closure. A CLOSURE IS A FUNCTION THAT PRESERVES THE OUTER SCOPE IN ITS INNER SCOPE. 

The following example illustrates a more practical example of closure.
*/

function greeting(message) {
  return function(name){
    return message + ' ' + name;
  }
}

let sayHi = greeting('Hi');
let sayHello = greeting('hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('John')) // Hello John

/* 
-The greeting function takes one argument named message and returns a function that accepts a single argument called name
-The return function returns a greeting message that is the combination of the message and name variables. 
-The sayHi() and sayHello() are closures. They share the same function body but store different scopes.
-In the sayHi() closure, the message is Hi, while in the sayHello() closure the message is Hello.
*/

/* 
JavaScript closures in a loop
-Consider the following example
*/

for(var index = 1; index <= 3; index++) {
  setTimeout(function() {
    console.log('after ' + index)
  })
}

/* 
Output
after 4 second(s): 4
after 4 second(s): 4
after 4 second(s): 4

-What we wanted to do in the loop is to copy the value of i in each iteration at the time of iteration to display a message after 1, 2 and three seconds 
-The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure. It remembers the value of i from the last iteration of the loop, which is 4.
-In addition, all three closures created by the for-loop share the same global scope access the same value of i.
-To fix this issue, you need to create a new closure scope in each iteration of the loop. 
-There are two popular solutions: IIFE & the let keyword.

1. Using the IIFE solution
-In this solution, you use an immediately invoked function expression (a.k.a IIFE) because an IIFE creates a new scope by declaring a function and immediately execute it.
*/

for(var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log(`after ${index} second(s): ${index}`);
    }, index * 1000)
  })(index);
}
