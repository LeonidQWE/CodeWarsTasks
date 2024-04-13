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

//--------------------------------------------------------------

// The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator! Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// function generateHashtag (str) {
//   const newStr = str.split(' ')
//                     .map((word) => {
//                       if (word) {
//                         return word.slice(0, 1).toUpperCase() + word.slice(1)
//                       }
//                     })
//                     .join('')

//   if (newStr.length <= 0 || newStr.length >= 140) {
//     return false
//   } else {return `#${newStr}`}
// }

// console.log(generateHashtag("")) //false
// console.log(generateHashtag("      ")) //false
// console.log(generateHashtag("Do We have A Hashtag")) //"#DoWeHaveAHashtag"
// console.log(generateHashtag("Codewars")) //"#Codewars"
// console.log(generateHashtag("Codewars Is Nice")) //"#CodewarsIsNice"
// console.log(generateHashtag("Codewars is nice")) //"#CodewarsIsNice"
// console.log(generateHashtag("code" + " ".repeat(140) + "wars")) //"#CodeWars"
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) //false
// console.log(generateHashtag("a".repeat(139))) //"#A" + "a".repeat(138)
// console.log(generateHashtag("a".repeat(140))) //false

//--------------------------------------------------------------

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers. Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead. Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
// const maxSequence = function(arr){
//   let maxSum = 0;
//   let currentSum = 0;

//   for (let num of arr) {
//     currentSum = Math.max(0, currentSum + num);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// console.log(maxSequence([])) //0
// console.log(maxSequence([-2, -3, 1, -3, 4, -1, 2, 1, -5, 4])) //6
// console.log(maxSequence([-2, -3, 1, -3, 4, -1, 2, 1, -5, 4, 11, -1])) //16

//--------------------------------------------------------------

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes? Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
// function cakes(recipe, available) {
//   let countCakes = Infinity;

//   for (let ingredient in recipe) {
//     if (ingredient in available) {
//       countCakes = Math.min(countCakes, Math.floor(available[ingredient] / recipe[ingredient]))
//     } else {return 0}
//   }

//   return countCakes
// }

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})) //2
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})) //0

//--------------------------------------------------------------

// The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such as F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.
// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.
// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.
// function productFib(prod){
  // let [a, b] = [0, 1];

  // while (a * b < prod) {
    // [a, b] = [b, a + b];
  // }

  // return [a, b, a * b === prod];
// }

// console.log(productFib(4895)) //[55, 89, true]
// console.log(productFib(5895)) //[89, 144, false]
// console.log(productFib(74049690)) //[6765, 10946, true]
// console.log(productFib(84049690)) //[10946, 17711, false]
// console.log(productFib(193864606)) //[10946, 17711, true]
// console.log(productFib(447577)) //[610, 987, false]
// console.log(productFib(602070)) //[610, 987, true]

//--------------------------------------------------------------

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string. For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string. As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'. If a string contains all repeating characters, it should return an empty string (""); † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
// function firstNonRepeatingLetter(s) {
//   if (!s) {
//     return '';
//   }

//   const lowerS = s.toLowerCase();
//   for (let char of lowerS) {
//     if (lowerS.indexOf(char) === lowerS.lastIndexOf(char)) {
//       return s[lowerS.indexOf(char)]
//     }
//   }

//   return ''
// }

// console.log(firstNonRepeatingLetter('a')) //'a'
// console.log(firstNonRepeatingLetter('stress')) //'t'
// console.log(firstNonRepeatingLetter('sTreSS')) //'T'
// console.log(firstNonRepeatingLetter('moonmen')) //'e'
// console.log(firstNonRepeatingLetter('aa')) //'e'

//--------------------------------------------------------------

// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest. I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits. For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// function orderWeight(strng) {
//   const weightNumbers = {}
//   const newString = strng.trim().split(' ');
//   newString.forEach((number) =>{
//     let weight = number.split('').reduce((sum, item) => sum + Number(item), 0)
//     weightNumbers[number] = weight
//   })

//   return newString.sort((a, b) => {
//     const weightDiff = weightNumbers[a] - weightNumbers[b];

//     if (weightDiff !== 0) {
//       return weightDiff;
//     } else {
//       return a.localeCompare(b);
//     }
//   }).join(' ')
// }

// console.log(orderWeight("103 123 4444 99 2000")) //"2000 103 123 4444 99"
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //"11 11 2000 10003 22 123 1234000 44444444 9999"

//--------------------------------------------------------------

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
// function domainName(url){
//   return url.match(/(?:http[s]?:\/\/)?(?:www\.)?([^\.]+)/)[1];
// }

// console.log(domainName("http://google.com")) //"google"
// console.log(domainName("http://google.co.jp")) //"google"
// console.log(domainName("www.xakep.ru")) //"xakep"
// console.log(domainName("https://youtube.com")) //"youtube"

//--------------------------------------------------------------

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// function incrementString (strng) {
//   const matches = strng.match(/(.*?)(\d*)$/);
//   const text = matches[1];
//   const numberSts = matches[2];

//   if (numberSts === '') {
//     return text + '1';
//   } else {
//     const number = Number(numberSts) + 1;
//     return text + number.toString().padStart(numberSts.length, '0')
//   }
// }

// console.log(incrementString("foobar000")) //"foobar001"
// console.log(incrementString("foobar999")) //"foobar1000"
// console.log(incrementString("foobar00999")) //"foobar01000"
// console.log(incrementString("foo")) //"foo1"
// console.log(incrementString("foobar001")) //"foobar002"
// console.log(incrementString("foobar1")) //"foobar2"
// console.log(incrementString("1")) //"2"
// console.log(incrementString("009")) //"010"
// console.log(incrementString("fo99obar99")) //"fo99obar100"

//--------------------------------------------------------------

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// function scramble(str1, str2) {
//   let str1Clone = str1
//   for (let i = 0; i < str2.length; i++) {
//     if (str1Clone.indexOf(str2[i]) >= 0) {
//       str1Clone = str1Clone.replace(str2[i], '')
//     } else {
//       return false
//     }
//   }
//   return true

//   //Better
//   // const charCount = {};

//   // for (let i = 0; i < str1.length; i++) {
//   //   charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
//   // }

//   // for (let j = 0; j < str2.length; j++) {
//   //   const char = str2[j];
//   //   if (!charCount[char]) {
//   //     return false;
//   //   }
//   //   charCount[char]--;
//   // }

//   // return true;
// }

// console.log(scramble('rkqodlw', 'world')) //true
// console.log(scramble('cedewaraaossoqqyt', 'codewars')) //true
// console.log(scramble('katas', 'steak')) //false
// console.log(scramble('scriptjavx', 'javascript')) //false
// console.log(scramble('scriptingjava', 'javascript')) //true
// console.log(scramble('scriptsjava', 'javascripts')) //true
// console.log(scramble('javscripts', 'javascript')) //false
// console.log(scramble('jscripts', 'javascript')) //false
// console.log(scramble('aabbcamaomsccdd', 'commas')) //true
// console.log(scramble('commas', 'commas')) //true
// console.log(scramble('sammoc', 'commas')) //true

//--------------------------------------------------------------

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
// Three 1's => 1000 points,  Three 6's =>  600 points,  Three 5's =>  500 points,  Three 4's =>  400 points,  Three 3's =>  300 points,  Three 2's =>  200 points,  One   1   =>  100 points,  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
// function score( dice ) {
  // const counts = new Array(7).fill(0);
  // const points = [0, 100, 200, 300, 400, 500, 600];
  // let score = 0;

  // dice.forEach((die) => {
    // counts[die]++;
  // });

  // for (let i = 1; i <= 6; i++) {
    // if (counts[i] >= 3) {
      // if (i === 1) {
        // score += 1000;
      // } else {
        // score += points[i];
      // }
      // counts[i] -= 3;
    // }
  // }

  // score += counts[1] * 100 + counts[5] * 50;

  // return score;
// }

// console.log(score([2, 3, 4, 6, 2])) //0
// console.log(score([4, 4, 4, 3, 3])) //400
// console.log(score([2, 4, 4, 5, 4])) //450
// console.log(score([3, 3, 3, 3, 3])) //300
// console.log(score([1, 1, 1, 1, 3])) //1100

