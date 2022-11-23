/* 
var vs. let

-With the introduction of es6 we now have keywords to use for variables let & const
-You can not reference a variable before it is initialized using let
-When you reference a variable useing var you are able to use it but you get undefined. 
*/
var firstName = 'conor';

if(firstName == 'conor') {
  console.log(firstName)
  var firstName = 'rob';
  
}
console.log(firstName)

// ! another example of scope

const greeting = 'hello';

if (true) {
  const greeting = 'good bye';
  console.log(greeting)
}

console.log(greeting);