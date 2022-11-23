// In the console include how many letters difference there are between the names.

// Example: Adam's name is shorter than mine by 4 letters. 

// *There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional.

// */


var myName = 'conorasdfsd';
var friendName = 'isaac'

var difference = myName.length - friendName.length

// console.log(Math.abs(difference))

if (difference < 0) {
    difference = Math.abs(difference)
}
if (myName.length > friendName.length) {
    console.log(`my name is longer by ${difference} letter(s)`)
} else if (myName.length === friendName.length) {
    console.log(`${myName} and ${friendName} are the same length`)
}
else {
    console.log(`my name is shorter by ${difference} letter(s)`)
}