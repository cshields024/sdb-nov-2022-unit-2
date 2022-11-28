// Execution context in JavaScript 

/* 
-In general a javascript source file will have multiple lines of code. As developers we organize the code into variables, functions, data structures like objects and arrays etc. 
-A LEXICAL ENVIRONMENT determines how and where we write our code physically. For example...
*/

function doSomething() {
  var age = 7;
  //more code...
}

/* 
-In the code above, the variable AGE is lexically inside the function DOSOMETHING.
-NOTE: Our code does not run as-is. It has to be translated by the compiler into computer understandable byte-code. So the compiler needs to map what is lexically placed where in the meaningful and valid way.
-Usually there will be more than one lexical environment in your code. However not all the environments get executed at once. 
-The environment that helps the code get executed is called the EXECUTION CONTEXT. It is the code that is currently running, and everything surrounding that helps to run it. 
- There can be lots of lexical environments available, but the one currently running code is managed by the execution context. 
-What exactly happens in the execution context? The code get parsed line by line generates executable byte-code, allocates memory, and executes. 
-What happens when this simple line of code get executed?
*/

var age = 7;

/* 
-That piece of source code goes through the following phrases before it is finally executed.
  -Tokenizing: In this phase, the source code string breaks into multiple meaningful chunks called TOKENS.For example var age = 7; tokenizes into var, age, =, 7 and, ;
  -Parsing: The next phase is parsing, where an array of tokens turns into a tree of nested elements understood by the languages grammer. This tree is called an AST (Abstract Syntax Tree).
  -Code Generation: In this phase the AST created in the parsing phase turns into executable byte-code. This executable byte-code is then optimized further by the JIT (Just In Time) compiler. 
*/

/* 
-All these things happen in an Execution Context. So the execution context is the environment where a specific portion of the code executes. 
-There are two types of execution contexts:
  -Global Execution Context (GEC)
  -Function Execution Context (FEC)
-Each of the execution contexts has two phases:
  -Creation phase
  -Execution phase
*/

/* 
!Global Execution Context (GEC) in JavaScript
-Whenever we execute JavaScript code, it creates a Global Execution Context (also known as Base Execution Context). The Global Execution Context has two phases
1. Creation Phase
-In the creation phase two unique things get created:
  -A global object called window (for the client-side JavaScript)
  -A global variable called this. 
-If there are any variables declared in the code, the memory gets allocated for the variable. The variable get initialized with a unique value called undefined. If there is a function in the code, it get placed directly into the memory. We will learn more about this part in the Hoisting section.

2. Execution phase
-Here the value assignment of the global variables takes place. NOTE: no function gets invoked here. 
*/

// ! Example

/* 
-If we make an empty index.js file and link it to an index.html file we can see that this and window are both created even when the index.js file is empty. 
-If we go to the browser and open the console and type window we will see the window object. If we type this we will see the same window object value printed in the browser console. 
-If we check we'll see that window is equal to this. 
-Summary
  -The Global Execution Context gets created when we load the JavaScript file even when it is empty. 
  -It creates two special things for us in its creation phase. The window object and this. 
  -In the Global Execution Context the window object and this are equal.
  -There is nothing to execute b/c the script file is blank. So nothing happens in the execution phase. 
*/

// ! Example 
/* 
-Now lets add some code to the JavaScript file. We'll add a variable (blog) with a value assigned to it. We'll also define a function with the name logBlog
*/

var blog = "MST"

function logBlog() {
  console.log(this.blog);
}

/* 
1. Creation Phase
-The global object window and the variable this get created. 
-Memory get allocated for the variable blog and the function logBlog.
-The variable blog gets initialized by a special value undefined. The function logBlog get placed in the memory directly.

2. Execution Phase
-The value 'MST' is assigned to the variable blog. 
-As we have defined the function but not called it yet, the function execution does not take place. 
*/

// ! Function Execution Context (FEC) in JavaScript

/* 
When we invoke a function, a Function Execution Context gets created. Lets extend the same example from above but this time we will call the function. 
*/

var blog = "MST"

function logBlog() {
  console.log(this.blog);
}
logBlog()

/* 
-The function execution context goes through the same phases, creation and execution. 
-The function execution phase has access to a special value called arguments. It is the arguments passed to the function. (in our ex. there are no arguments.)
?NOTE the window object and the this variable created in the Global Execution Context are still accessible in this context. 
-When a function invokes another function, a new function execution context get created for the new function call. Each of the function execution contexts determines the scope of the variables used in the respective functions. 
*/

// ! Hoisting in JavaScript

console.log(name)
var name; // Output undefined

/* 
-Why is this output undefined? In other programs we would expect an error saying variable name is not declared. The answer lies in the execution context. 
-Creation phase
  -The memory get allocated for the variable name
  -A special value "undefined" is assigned to the varible. 
-Execution phase
  -The console.log(name) statement will execute. 
-The mechanism of allocating memory for variables and initializing with the value undefined at the execution contexts creation phase is called "variable hoisting"
-The special value "undefined" means that a variable is declared but no value is assigned. 
*/

//If we assign the variable a value like this:

name ="mupp"

//The execution phase will assign this value to the variable.

// !Function Hoisting in JavaScript

/* 
-Function hoisting follows the same pattern as variable hoisting. 
-The creation phase of the execution context puts the function declaration into the memory, and the execution phase executes it. 
*/

//Invoke the function functionA
functionA();

//Declare the function functionA
function functionA() {
  console.log('Function A');
  //Invoke the function functionB
  functionB();
}
//Declare the function functionB
function functionB() {
  console.log('FunctionB');
}

/* 
The output is the following
  FunctionA
  FunctionB

-The execution context creates the memory for the function and puts the entire function declaration of functionA in it. 
-The functions create their own execution context. So a similar thing happens for functionB as well. 
-Next the functions get executed in their execution context respectively. 
-Putting the entire function declaration ahead into the memory at the creation phase is called "Function Hoisting"
*/

// ! A few ground rules

/* 
-Always define variables and functions before using them in your code. It reduces the chances of surprise errors and debugging nightmares. 
-Hoisting is only for function declaration, not initialization. 
*/

//Example of function initialization where the code will break

logMe();

var logMe = function() {
  console.log('Logging...');
}

/* 
-The code execution will break because with function initialization, the variable "logMe" will be hoisted as a variable not as a function. So with variable hoisting, memory allocation will happen with the initialization with undefined. That's the reason we will get the error: Uncaught TypeError: logMe is not a function at <anonymous>
*/

/* 
-Suppose we try to access a variable ahead of declaration and use the let and const keywords to declare it later. In that case they will be hoisted but not assigned with the default undefined. Accessing such variables will result in the ReferenceError 
*/

console.log(name);
let name;

//Will throw error Uncaught ReferenceError: name is not defined

/* 
The same code will run without a problem if we use var instead of let and const. This error is a safeguard mechanism from the JavaScript language as we have discussed already, as accidental hoisting may cause unnecessary troubles. 
*/