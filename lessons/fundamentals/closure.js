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

/* 
Output:
-after 1 second(s):1
-after 2 second(s):2
-after 3 second(s):3
*/

//! Using let keyword in ES6

/* 
-In ES6 you can use the let keyword to declare a variable that is block-scoped.
-If you use the let keyword in the for-loop, it will create a new lexical scope in each iteration. In other words, you will have a new index variable in each iteration. 
-In addition the new lexical scope is chained up to the previous scope so that the previous value of the index is copied from the previous scope to the new one.
*/

for(let index = 1; index <= 3; index++) {
  setTimeout(function() {
    console.log(`after ${index} second(s): ${index}`)
  }, index * 1000);
}

/* 
Output:
-after 1 second(s): 1
-after 2 second(s): 2
-after 3 second(s): 3
*/

/* 
Summary:
-Lexical scoping describes how the JavaScript engine uses the location of the variable in the code to determine where that variable is availabe.
-A closure is a combination of a function and its ability to remember variables in the outer scope. 
*/

// ! More about Closures 

/* 
What are closures?
-Closures are functions that have access to the variables that are present in their scope chain even if the outer function ceases to exist. 
-Scope chain refers to the fact that parent scope does not have access to the variables inside its childrens scope, but the children's scope does have access to the variables present in its parents scopes. 
-For clarity here is an example...
*/

let buttonProps = (borderRadius) => {
  const createVariantButtonProps = (variant, color) => {
    const newProps = {
      borderRadius,
      variant,
      color
    };
    return newProps;
  }
  return createVariantButtonProps;
}

/* 
-We have a function called "buttonProps". This function accepts "borderRadius" as an argument. Let's consider the "buttonProps" function as our parent function. 
-We have another function that has been defined inside the parent function, that is "createVariantButtonProps". This function will accept "variant" and "color" as an argument and return an object that constitutes a variable "borderRadius" that is present outside its scope. 
-A question arises as to how the inner function resolves the variables that are present in the parent scope. 
-This is possible via lexical scoping. Using lexical scoping the JS parser knows how to resolve variables present in its current scope or in fact knows how to resolve variables present in the nested functions. 
-So, based on the above explanation, "createVariantButtonProps" will have access to the variables present in its outer function "button props".
-The inner function "createVariantButtonProps" is a closure. To understand closures in detail we will first go through the characteristics of closures which are as follows:
  -Even if the outer function ceases to exist, a closure still has access to its parent variables. 
  -Closures do not have access to their outer function's "args" parameter
*/

// ! Even if the outer function ceases to exist, it still has access to its parent variables. 

/* 
-This is the basic functionality of any closure. This is their main life motto (AKA their working principle)
-To see this in action we will execute the above "buttonProps" function
*/

let primaryButton = buttonProps(1rem);

/* 
-Calling the "buttonProps" function will return us another function that is our closure. 
-Now lets execute this closure:
*/

const primaryButtonProps = primaryButton("primary", "red");

//Once the closure is executed, it returns the following object. 

{
  "borderRadius": "1rem",
  "variant": "primary",
  "color": "red"
}

/* 
-Here again a question arises: How does the "primaryButton" function have access to the variable "borderRadius" that was not present inside it?
-If we go through the definition of closures, and scope chaining that we discuessed earlier, it perfectly fits into that instance. 
-Still, why do closures still have access to the variables that are defined outside their scope, even if the outer function ceases to exist- for example, "borderRadius"
-The answer is simple: closures do not store static values. Instead, they store references to the variables present inside the scope chain. In this way, even if the outer function dies, the inner function, that is a closure, still has access to its parent variables. 
*/

// ! Use case of Closure: Creating a fetch utility with closures

/* 
-Now that we've learned what closures are, we will create a nice general purpose utility function. It will handle different request methods such as GET and POST with REST APIs.
  -We will be using JSON placeholder API's this provides us with some fake data which we can edit using REST APIs.
  -We will be using JavaScript's fetch API.
-Lets first discuss why we even need to design such a utility. There are a couple of reasons.
  -For every fetch call, we don't want to define the base URL (or other common parameters) all the time. So we will create a mechanism that will store the base URL/parameters as a state. 
  -To remove redundant code. 
  -To provide modularity in the codebase.
-Lets get into the details of this utility. Our fetch utility will look like below...
*/

const fetchUtility = (baseURL, headers) => {
  const createFetchInstance = (route, requestMethod, data) => {
    const tempReq = new Request(`${baseUrl}${route}`, {
      method: requestMethod,
      headers, 
      data: data || null
    });
    return [fetch, tempReq]
  };
  return createFetchInstance;
};

/* 
-Fetch Utility breakdown
  -"fetchUtility" accepts two parameters that are "baseURL" and "headers". These will be used later in the closure to construct the base URL along with the headers. 
  -Then we have "createFetchInstance", which accepts "route", "requestMethod" and "data" as parameters.
  -Then we return the instance of a fetch API along with the request object. 
  -Lastly we return the "createFetchInstance" function. 
-Now lets see this function in action. Call our "fetchUtility" function to initialize "baseURL"
*/

const fetchInstance = fetchUtility("https://jsonplaceholder.typicode.com");

/* 
-If we observe, the "fetchInstance" now has the value of the closure of the function "fetchUtility".
-Next, we pass the route and the type of the request to the closure "fetchInstance"
*/

const [getFunc, getReq] = fetchInstance("/todos/1", "GET");

/* 
-This returns us an array of fetch API instance and the request body that we configured. 
-Finally, we can makeuse of the gteFunc fetch API to call the request getReq like below
*/

getFunc(getReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));

/* 
We can also create a POST request similar to the above GET request. We just need to call the "fetchInstance" again as below:
*/

const [postFunc, postReq] = fetchInstance(
  "/posts",
  "POST",
  json.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  })
)

/* 
-And to execute this post request we can do the similar operation that we did for the GET request:
*/

postFunc(postReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));

/* 
-In the above ex. we can see that the inner function "createFetchInstance" has access to the variables present in its scope chain. With the help of lexical scoping, during its definition of "createFetchInstance" it resolves variable names. 
-In this way the closure references the variables "baseURL" and "headers" during its definition even after the outer function "fetchUtility" has ceased to exist. 
-If we think of closures from a different perspective, then closures help us to maintain a state like "baseURL" and "headers" that we can use across function calls. 
*/

// ! Advantages of Closures

/* 
-They allow you to attach variables to an execution context. 
-Variables in closures can help you maintain a state that you can use later. 
-They provide data encapsulation.
-They help remove redundant code. 
-They help maintain modular code. 
*/

// ! Disadvantages of closures

/* 
-The variables declared inside a closure are not garbage collected.
-Too many closures can slow down your application. This is actually caused by duplication of code in the memory. 
*/

// ! Summary

/* 
-Closures can be really useful if you want to deal with or implement certain design patterns. They also help you write neat and modular code. 
*/

// ! Simple closure example

function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(a + b);
  }
  return inner;
}

/* 
-Here we have two functions:
  -an outer function "outer" which has a variable "b", and returns the "inner" function inner/ 
  -An inner function "inner" which has its variable called "a", and accesses an "outer" variable "b", within its function body
-The scope of variable "b" is limited to the "outer" function, and the scope of variable "a" is limited to the "inner" function.
-Now lets invoke the outer() function, and store the result of the "outer()" function in a variable "x". Let us then invoke the  "outer()" function a second time and store it in a variable "y"
*/

var x = outer();
var y = outer();

/* 
-Step by step what happens when the "outer()" function is first invoked. 
  1. Variablae "b" is created, its scope is limited to the "outer()" function, and its value is set to 10.
  2. The next line is a function declaration, so nothing to execute. 
  3. On the last line, "return inner" looks for a variable called "inner", finds that this variable "inner" is actually a function, and so returns the entire body of the function "inner".
  4. The contents returned by the return statement are stored in "x". Thus "x" will store the following:
*/

function inner() {
  var a = 20;
  console.log(a + b);
}

/* 
5. Function "outer()" finishes execution, and all variables within the scope of "outer()" now no longer exist

-This last part is important to understand. Once a function completes its execution, any variables that were defined inside the function scope cease to exist. 
-The lifespan of a variable defined inside of a function its the lifespan of the function execution. 
-What this means is that in "console.log(a + b)", the variable "b" exists only during the execution of the "outer()" function. Once the "outer" function has finished execution, the variable "b" no longer exists. 
-Thus, when "outer()" is invoked the second time:
  1. A new variable "b" is created, its scope is limited to the "outer()" function, and its value is set to 10. 
  2. The next line is a function declaration, so nothing to execute. 
  3. "return inner" returns the entire body of the function "inner".
  4. The contents returned by the return statement are stored in "y".
  5. Function "outer()" finishes execution, and all variables within the scope of "outer()" now no longer exist. 
-The important point here is that when the "outer()" function is invoked the second time, the variable "b" is created anew. Also, when the "outer()" function finishes execution the second time, this new variable "b" again ceases to exist.  
-This is the most important point to realize. The variables inside the functions only come into existence when the function is running, and cease to exist once the function completes execution. 
-Since the "outer()" function on execution returns a function, the variables "x" and "y" are functions. 
*/

console.log(typeof(x));
console.log(typeof(y));

/* 
Since the variables "x" and "y" are functions, we can execute them. 
*/

function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(a + b);
  }
  return inner;
}

x(); // x() invoked the first time
x(); // x() invoked the second time
x(); // x() invoked the third time
y(); // y() invoked the first time

/* 
-When we execute x() and y() we are essentially executing the "inner" function
-Step by step what happens when "x()" is executed the first time:
  1. Variable "a" is created, and its value is set to 20.
  2. JavaScript now tries to execute "a + b". JavaScript knows that "a" exists since it just created it. However, variable "b" no longer exists. Since 'b' is part of the outer function, "b" would only exist while the outer() function is in execution. Since the outer() function finished execution long before we invoked x(), any variables within the scop of the "outer" function cease to exist, and hence variable "b" no longer exists. 
-JavaScript uses closures to handle this. 
*/ 

// ! Closures

/* 
-The "inner" function can access the variables of the enclosing function due to closures in JavaScript.
*/
// ! The "inner" function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing functions variables.

/* 
-In our example, the "inner" function had preserved the value of "b = 10" when the "outer()" function was executed, and continued to preserve (closure) it. 
- It now refers to its scope chain and notices that it does have the value of variable "b" within its scope chain, since it had enclosed the value of "b" within a closure at the point when the "outer" function had executed. 
-Thus, JavaScript knows "a=20" and "b=10" and can calculate "a+b".
-In Dev tools we can expand the "inner()" element and see the value of "b=10" is preserved in the closure even after the "outer()" function completes its execution. 
-So the inner function has three scopes
  1. Access to its own scope.
  2. Access to the "outer" function's variables- variable "b" which it enclosed.
  3. Access to any global variables that may be defined.
*/

// ! Closures in Action

function outer() {
  var b = 10;
  var c = 100;
  function inner() {
    var a = 20;
    console.log('a=' + a + 'b=' + b );
    a++;
    b++;
  }
  return inner;
}

var x = outer(); //outer() invoked the first time
var y = outer(); //outer() invoked the second time;
// end of outer() function executions

x(); // x() invoked the first time
x(); // x() invoked the second time
x(); // x() invoked the third time
y(); // y() invoked the first time. 

/* 
-Step by step through example "var x = outer();"
  1.Variable "b" is created, and is set to "10"
  variable "c" is created and set to "100". We'll call this "b(first_time)" and "c(first_time)" for our own reference/
  2.The "inner" function is returned and assigned to "x". At this point, the variable "b" is enclosed within the "inner" function scope chain as a closure with "b=10" since "inner" uses the variable "b"
  3.The "outer" function completes execution, and all its variables cease to exist. The variable "c" no longer exists, although the variable "b" exists as a closure within "inner".
-Step by step through "var y = outer()"
  1.Variable "b" is created anew and is set to "10" variable "c" is created a new and set to "100". NOTE: even though "outer()" was executed once before variables "b" and "c" ceased to exist, once the function completed execution they are created as brand new variables. We'll call these "b(second_time)" and "c(second_time)" for our own reference. 
  2. The "inner" function is returned and assigned to "y". At this point the variable "b" is enclosed within the "inner" function scope chain as a closure with "b(second_time)=10", since "inner" uses the variable "b".
  3.The "outer" function completes execution, and all its variables cease to exist. The variable "c(second_time)" no longer exists, although the variable "b(second_time)" exists as a closure within "inner".
-Now lets see what happens when all of the following lines of code are executed.
*/

x(); // x() invoked the first time
x(); // x() invoked the second time
x(); // x() invoked the third time
y(); // y() invoked the first time. 

/* 
-When "x()" is invoked the first time.
  1.Variable "a" is created, and set to 20
  2. The value of "a=20" the value of "b" is from the closure value "b(first_time)" so "b-10"
  3.Variables "a" and "b" are incremented by one
  4. x() completes execution and all its inner variables - variable "a" - cease to exist. However, "b(first_time)" was preserved as the closure, so "b(first_time)" continues to exist. 
-When x() is invoked the second time:
  1.Variable "a" is created anew, and set to "20". Any previous value of variable "a" no longer exists, since it ceased to exist when x() completed execution the first time. 
  2.The value of a = 20 the value of "b" is taken from the closure value - "b(first_time)" also note that we had incremented the value of "b" by 1 from the previous execution so b=11
  3.x() completes execution and all its inner variables - variable "a" - cease to exist. However "b(first_time)" was preserved as the closure, so ("b(first_time") continues to exist. 
*/
