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
