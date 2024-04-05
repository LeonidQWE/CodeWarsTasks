//-----------------------5kyu (part 1)--------------------------
//--------------------------------------------------------------

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// function moveZeros(arr) {
//   const arrClone = structuredClone(arr);
//   return arrClone.sort((a, b) => {
//     if (b === 0) {
//       return -1;
//     }
//   })
// }

// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) //[false, 1, 1, 2, 1, 3, 'a', 0, 0]

//--------------------------------------------------------------

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// function pigIt(str){
//   return str.split(' ')
//             .map((word) => {
//               if (/^[a-zA-Z]+$/.test(word)) {
//                 return `${word.slice(1)}${word.slice(0, 1)}ay`
//               } else {
//                 return word;
//               }
//             })
//             .join(' ')
// }

// console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay'
// console.log(pigIt('This is my string')) //'hisTay siay ymay tringsay'
// console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay'
// console.log(pigIt('Hello world !')) //elloHay orldway !

//--------------------------------------------------------------

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.
// function humanReadable (seconds) {
//   const ours = Math.trunc(seconds / 3600);
//   const minuts = Math.trunc((seconds - ours * 3600) / 60)
//   const second = Math.trunc(seconds - ours * 3600 - minuts * 60)

//   return `${String(ours).length < 2 ? '0' + ours : ours}:${String(minuts).length < 2 ? '0' + minuts : minuts}:${String(second).length < 2 ? '0' + second : second}`;
// }

// console.log(humanReadable(0)) //'00:00:00'
// console.log(humanReadable(59)) //'00:00:59'
// console.log(humanReadable(60)) //'00:01:00'
// console.log(humanReadable(90)) //'00:01:30'
// console.log(humanReadable(3599)) //'00:59:59'
// console.log(humanReadable(3600)) //'01:00:00'
// console.log(humanReadable(45296)) //'12:34:56'
// console.log(humanReadable(86399)) //'23:59:59'
// console.log(humanReadable(86400)) //'24:00:00'
// console.log(humanReadable(359999)) //'99:59:59'

//--------------------------------------------------------------

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value. Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// function rgb(r, g, b) {
//   const getCorrectValue = function (value) {
//     if (value < 0) {
//       return 0;
//     } else if (value > 255) {
//       return 255;
//     } else {return value;}
//   }

//   const correctR = getCorrectValue(r);
//   const correctG = getCorrectValue(g);
//   const correctB = getCorrectValue(b);

//   const redHex = correctR.toString(16).padStart(2, '0').toUpperCase();
//   const greenHex = correctG.toString(16).padStart(2, '0').toUpperCase();
//   const blueHex = correctB.toString(16).padStart(2, '0').toUpperCase();

//   return `${redHex}${greenHex}${blueHex}`;
// }

// console.log(rgb(0, 0, 0,)) //'000000'
// console.log(rgb(0, 0, -20,)) //'000000'
// console.log(rgb(300, 255, 255,)) //'FFFFFF'
// console.log(rgb(173, 255, 47,)) //'ADFF2F'

//--------------------------------------------------------------

// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side). The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {North, East, West, South}.
// function dirReduc(arr){
//   const optimalDirection = [];
//   const directions = {
//     'SOUTH': 'NORTH',
//     'NORTH': 'SOUTH',
//     'WEST': 'EAST',
//     'EAST': 'WEST',
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (directions[arr[i]] === optimalDirection[optimalDirection.length - 1]) {
//       optimalDirection.pop();
//     } else {
//       optimalDirection.push(arr[i])
//     }
//   }

//   return optimalDirection
// }

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //["WEST"]
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) //["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) //[]

//--------------------------------------------------------------

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666
// function zero(operation) {return operation ? operation(0) : 0;}
// function one(operation) { return operation ? operation(1) : 1;}
// function two(operation) { return operation ? operation(2) : 2;}
// function three(operation) {return operation ? operation(3) : 3;}
// function four(operation) {return operation ? operation(4) : 4;}
// function five(operation) {return operation ? operation(5) : 5;}
// function six(operation) {return operation ? operation(6) : 6;}
// function seven(operation) {return operation ? operation(7) : 7;}
// function eight(operation) {return operation ? operation(8) : 8;}
// function nine(operation) {return operation ? operation(9) : 9;}

// function plus(number) {return function(operation) {return number + operation;}}
// function minus(number) {return function (operation) {return operation - number;}}
// function times(number) {return function(operation) {return number * operation;}}
// function dividedBy(number) {return function(operation) {return Math.floor(operation / number);}}

// console.log(seven(times(five ()))) //35
// console.log(four (plus(nine ()))) //13
// console.log(eight(minus(three()))) //5
// console.log(six(dividedBy(two  ()))) //3

//--------------------------------------------------------------
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// function rot13(message){
//   const messageClone = message;
//   const getCorrectChar = (minCode, maxCode, charCode) => {
//     if (charCode + 13 > maxCode) {
//       return String.fromCharCode(minCode + (13 - (maxCode - charCode)));
//     } else {
//       return String.fromCharCode(charCode + 13);
//     }
//   }

//   return messageClone.split('')
//                       .map((char) => {
//                         if ((char.charCodeAt() > 64 && char.charCodeAt() <= 90)) {
//                           return getCorrectChar(64, 90, char.charCodeAt());
//                         } else if ((char.charCodeAt() > 96 && char.charCodeAt() < 123)) {
//                           return getCorrectChar(96, 122, char.charCodeAt());
//                         } else {
//                           return char;
//                         }
//                       })
//                       .join('')
// }

// console.log(rot13('test')) //'grfg'
// console.log(rot13('abcdefghijklmnopqrstuvwxyz')) //'nopqrstuvwxyzabcdefghijklm'
