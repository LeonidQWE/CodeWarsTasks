// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
// function multiply(number){
//   //your code here
//   const lenthOfNumber = String(Math.abs(number))
//   return number * Math.pow(5, lenthOfNumber.length)
// }


// multiply(3) //== 15 # 3 * 5¹
// multiply(10) //== 250 # 10 * 5²
// multiply(200) //== 25000 # 200 * 5³
// multiply(0) //== 0 # 0 * 5¹
// multiply(-3) //== -15 # -3 * 5¹


// Create a function that returns the CSV representation of a two-dimensional numeric array.
// function toCsvText(array) {
//   return array.map(row => row.join(',')).join('\n');
// }

// toCsvText([
//   [ 0, 1, 2, 3, 45 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
//  ])
// '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'

// toCsvText([
//   [ -25, 21, 2, -33, 48 ],
//   [ 30,31,-32,33,-34 ]
//  ])
//'-25,21,2,-33,48\n30,31,-32,33,-34');


// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// function sumArray(array) {
//   if (!array || array.length < 3) {
//     return 0
//   }

//   const sortArray = array.sort((a, b) => a - b)
//   const sumElement = sortArray.reduce((sum, item, index, arr) => {
//     if (index !== 0 && index !== (sortArray.length - 1)) {
//       return sum += item
//     }

//     return sum
//   }, 0)

//   return sumElement
// }

// sumArray(null) //0
// sumArray([ ]) //0
// sumArray([ 3 ]) //0
// sumArray([ 3, 5 ]) //0
// sumArray([ 6, 2, 1, 8, 10 ]) //16
// sumArray([ 0, 1, 6, 10, 10 ]) //17
// sumArray([ -6, -20, -1, -10, -12 ]) //-28
// sumArray([ -6, 20, -1, 10, -12 ]) //3


// Весокосный год
// function yearDays(year)
// {
//   if (year === 0) {
//     return `${year} has 366 days`
//   }

//   //your code here
//   return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
//     ? `${year} has 366 days`
//     : `${year} has 365 days`;
// }

// yearDays(0) //'0 has 366 days'
// yearDays(-64) //'-64 has 366 days
// yearDays(2016) //'2016 has 366 days'
// yearDays(1974) //'1974 has 365 days'
// yearDays(-10) //'-10 has 365 days'
// yearDays(666) //'666 has 365 days'
// yearDays(1857) //'1857 has 365 days'


// // Create a function that always returns True/true for every item in a given list.
// // However, if an element is the word 'flick', switch to always returning the opposite boolean value.
// function flickSwitch(arr){
//   let switchVariable = true;
//   const newArray = []

//   if (arr.length < 1) {
//     return []
//   }

//   arr.forEach((item) => {
//     if (item === 'flick') {
//       switchVariable = !switchVariable
//     }

//     newArray.push(switchVariable)
//   })
//   return newArray
// }

// flickSwitch(["codewars", "flick", "code", "wars"]) //[true, false, false, false]
// flickSwitch(["flick", "chocolate", "adventure", "sunshine"]) //[false, false, false, false]
// flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]) //[true, true, false, false, true]
// flickSwitch(["flick", "flick", "flick", "flick", "flick"]) //[false, true, false, true, false]
// flickSwitch(["john, smith, susan", "flick"]) //[true, false]
// flickSwitch(["bicycle"]) //[true]
// flickSwitch(["flick"])// [false]
// flickSwitch([])// []


// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// function fixTheMeerkat(arr) {
//   const arrClone = structuredClone(arr)
//   return arrClone.reverse()
//  }

// fixTheMeerkat(["tail", "body", "head"])  // ["head", "body", "tail"];
// fixTheMeerkat(["tails", "body", "heads"]) // ["heads", "body", "tails"];
// fixTheMeerkat(["bottom", "middle", "top"]) // ["top", "middle", "bottom"];
// fixTheMeerkat(["lower legs", "torso", "upper legs"]) // ["upper legs", "torso", "lower legs"];
// fixTheMeerkat(["ground", "rainbow", "sky"]) // ["sky", "rainbow", "ground"];


// // Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// function invert(array) {
//   return array.length < 1 ? [] : array.map((item) => item = 0 - item)
// }

// invert([1,2,3,4,5]) // [-1,-2,-3,-4,-5];
// invert([1,-2,3,-4,5]) // [-1,2,-3,4,-5]);
// invert([]) // [];
// invert([0]) // [0];


// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// const stringToNumber = function(str) {
//   // put your code here
//   if (str.length && !isNaN(Number(str))) {
//     return Number(str)
//   }
//   return null;
// }

// stringToNumber("1234") //1234
// stringToNumber("605") // 605
// stringToNumber("1405") //1405
// stringToNumber("-7") //  -7
// stringToNumber("asd") //  -7


// You are given two vectors starting from the origin (x=0, y=0) with coordinates (x1,y1) and (x2,y2). Your task is to find out if these vectors are collinear. Collinear vectors are vectors that lie on the same straight line. They can be directed in the same or opposite directions. One vector can be obtained from another by multiplying it by a certain number. In terms of coordinates, vectors (x1, y1) and (x2, y2) are collinear if (x1, y1) = (k*x2, k*y2) , where k is any number acting as a coefficient.
// function collinearity( x1,y1, x2,y2 ) {
//   return x1 * y2 === x2 * y1 ? true : false;
// }

// collinearity( 1,1, 1,1 )// true,
// collinearity( 1,2, 2,4 )// true,
// collinearity( 1,2, -1,-2 )// true,
// collinearity( 1,1, 6,1 )// false,
// collinearity( 1,2, 1,-2 )// false,
// collinearity( 4,0, 11,0 )// true,
// collinearity( 0,1, 6,0 )// false,
// collinearity( 4,4, 0,4 )// false,
// collinearity( 0,0, 0,0 )// true,
// collinearity( 0,0, 1,0 )// true,
// collinearity( 5,7, 0,0 )// true,



// Switzerland has four official languages: German, French, Italian, and Romansh.
// When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group. Here are the rules for groups of exactly three people:
// When all three are native speakers of the same language, it also becomes their group's language.
// When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.
//When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.
// The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.
// Your task is to write a function that takes a list of three languages and returns the language the group should use.
// function trilingualDemocracy(group) {
//   if (group[0] === group[1] && group[0] === group [2]) {
//     return group[0]
//   } else if (group[0] !== group[1] && group[0] !== group[2] && group[1] !== group[2]) {
//     return 'DFIK'.split('').filter((language) => !group.includes(language))[0]
//   } else {
//     if (group[0] === group[1]) {
//       return group[2]
//     } else if (group[0] === group[2]) {
//       return group [1]
//     } else {
//       return group[0]
//     }
//   }
// }

// console.log(trilingualDemocracy("FFF")) //"F"
// console.log(trilingualDemocracy("IIK")) //"K"
// console.log(trilingualDemocracy("DFK")) //"I"


// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// function partlist(arr) {
//   const resultArray = []
//   for (let i = 0; i < (arr.length - 1); i++) {
//     resultArray.push([arr.slice(0, i + 1).join(' '), arr.slice(i + 1).join(' ')])
//   }

//   return resultArray
// }

// console.log(partlist(["I", "wish", "I", "hadn't", "come"])) //[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
// console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])) //[["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]
// console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])) //[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]


// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).
// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.
// function isAllPossibilities(x){
//   for (let i = 0; i <= (x.length - 1); i++) {
//     if (x.includes(i)) {
//       continue
//     } else {
//       return false
//     }
//   }

//   return true
// }

// console.log(isAllPossibilities([0,1,2,3])) //true
// console.log(isAllPossibilities([1,2,3,4])) //false
// console.log(isAllPossibilities([0])) //true
// console.log(isAllPossibilities([7,3,5,0,3,2,4,6,1])) //false


// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
// function alphabet(ns) {
//   const newArray = ns.sort((a, b) => a - b )
//   const a = newArray[0]
//   const b = newArray[1]
//   if ((a * b) === newArray[2]) {
//     newArray.splice(0, 3)
//   } else {
//     newArray.splice(0, 2)
//   }

//   return newArray[newArray.length - 1] / newArray[0]
// }

// console.log(alphabet([2,3,4,1,12,6,2,4])) //4
// console.log(alphabet([2,6,7,3,14,35,15,5])) //7
// console.log(alphabet([20,10,6,5,4,3,2,12])) //5
// console.log(alphabet([2,6,18,3,6,7,42,14])) //7
// console.log(alphabet([7,96,8,240,12,140,20,56])) //20
// console.log(alphabet([20,30,6,7,4,42,28,5])) //7
// console.log(alphabet([39,37,6,13,3,2,481,74])) //37


// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//   return l.filter((item) => typeof item === 'number')
// }

// console.log(filter_list([1,2,'a','b'])) //[1,2]
// console.log(filter_list([1,'a','b',0,15])) //[1,0,15]
// console.log(filter_list([1,2,'aasf','1','123',123])) //[1,2,123]



