// const prompt = require("prompt-sync")();
// use max and min range variables. reassign after each y or n. 
// randomNum = Math.floor(Math.random() * 99) + 1

// let number = prompt('enter a number ');
// const startNum = Math.floor(Math.random() * 100)
// if (startNum <= 100 && startNum >= 1) {
//    let input = prompt('Let me guess... is your number 50? y/n ') 
// } else if (input === 'n') {
    
// }

let secretNum = Math.floor(Math.random() * 1000) + 1;
let maxNum = 1000;
let minNum = 1;
// Making guess dynamic means we can use any number range.
let guess = Math.round((maxNum + minNum) / 2)
console.log('secretNum:', secretNum)
// ! THIS WORKS!!
if (secretNum <= 1000) {
   console.log(`lets play!`)
} else {
   console.log(`please choose a number i can handle`)
}

while(guess != secretNum) {
   if(guess === secretNum);
   else if (guess < secretNum) {
      minNum = guess + 1
      guess = Math.round((maxNum + minNum) / 2)
      console.log('minNum:',minNum);
      console.log('guess:',guess);
      if (minNum === secretNum);
   } else {
      maxNum = guess - 1 
      guess = Math.round((maxNum + minNum) / 2)
      console.log('maxNum:',maxNum);
      console.log('guess:',guess);
      if (maxNum === secretNum);
   }
}

if  (minNum === secretNum) {
   console.log(`is your number ${minNum}?`)
} else if (maxNum === secretNum) {
   console.log(`is your number ${maxNum}?`)
} else {
   console.log(`is your number ${guess}?`)
}


// while(guess != secretNum) {
//    if(guess === secretNum) break;
//    else if (guess < secretNum) {
//       minNum = guess + 1
//       guess = Math.round((maxNum + minNum) / 2)
//    } else if (guess > secretNum) {
//       maxNum = guess + 1 
//       guess = Math.round((maxNum + minNum) / 2)
//    } else {
//       console.log(`is your number ${guess}`)
//    }
// }


// function guessNum() {
//    if (guess === )
// } 

// while (guess != secretNum) {
//    if (guess < secretNum) {
//       minNum = 51
//       guess = Math.round((maxNum + minNum) / 2)
//    } else if (guess > secretNum) {
//       maxNum = 51
//       guess = Math.round((maxNum + minNum) / 2)
//    } else {
//       console.log(`Your number must me ${guess}`)
//    }
//    console.log(`Your number must me ${guess}`)
// }
// ! use a variable set to true to get out of the while loop
// function getGuess() {
//    console.log(`is this your number ${guess}`)
//    if (guess < secretNum) {
//       //minNum = 51
//       minNum = guess + 1
//       guess = Math.round((maxNum + minNum) / 2)
//       console.log('secretNum:', secretNum)
//       console.log('guess:', guess)
//       console.log('minNum:', minNum)
//       console.log('maxNum:', maxNum)
//    } else if (guess > secretNum) {
//       //maxNum = 51
//       maxNum = guess + 1
//       guess = Math.round((maxNum + minNum) / 2)
//       console.log('minNum:', minNum)
//       console.log('maxNum:', maxNum)
//       console.log(guess)
//       console.log('secretNum:', secretNum)
//    } else {
//       console.log(`This must be your number ${guess}`)
//    }
//    console.log(guess)
// }
// while (guess == secretNum) {
//    if (guess != secretNum) {
//       getGuess()
//    } else {
//       console.log(`is your number ${guess}`)
//    }   
// }

// getGuess()
 

// while (guess != secretNum) {
//    if (secretNum > guess) {
//       minNum = 50
//       guess = Math.round(maxNum + minNum / 2);
//       console.log(`is ${guess} your number `)
//    } else if (secretNum < guess) {
//       maxNum = 50
//       guess = Math.round(maxNum + minNum / 2);
//    }
// }
// if (secretNum > guess) {
//    while (secretNum > guess) {
//       minNum = 50
//       guess = Math.round(maxNum + minNum / 2);
//    }
// } else if (secretNum < guess) {
//    while (secretNum < guess) {
//       maxNum = 50
//       guess = Math.round(maxNum + minNum / 2);
//    } 
// } else {
//    console.log(`your number is ${guess}`)
// }