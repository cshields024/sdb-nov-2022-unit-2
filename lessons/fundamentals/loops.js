/* 
Loops
-They offer a quick and easy way to do something repeatedly
-There are many kinds of loops:
    -For Loops
    -Do while loops
    -while loops
*/

// ! DANGER: there is a danger in being stuck in an infinite loop


//    (1)     (2)       (3)
for(let i = 0; i <= 10; i++);

/* 
1. sets the variable before the loop starts
2. defines the condition of the loop to run (ex. its going to continue until i reaches 10)
3. Increases the value of i each time the code block is executed in the loop. 
*/

// Use Modulus to log only even indicies

const myName = 'mupp';

for(let i = 0; i < myName.length; i++) {
    if (i % 2 === 0){
        console.log(myName[i])
    }
}

// ! While loop
/* 
This will loop through the code block as long as the condition is true. 
1. is the keyword while
2. is the conditional
*/
let i = 0
//    (1) (2)
while(i < 10) {
    console.log(i++)
}