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

// -----------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

// // Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// function invert(array) {
//   return array.length < 1 ? [] : array.map((item) => item = 0 - item)
// }

// invert([1,2,3,4,5]) // [-1,-2,-3,-4,-5];
// invert([1,-2,3,-4,5]) // [-1,2,-3,4,-5]);
// invert([]) // [];
// invert([0]) // [0];

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//   return l.filter((item) => typeof item === 'number')
// }

// console.log(filter_list([1,2,'a','b'])) //[1,2]
// console.log(filter_list([1,'a','b',0,15])) //[1,0,15]
// console.log(filter_list([1,2,'aasf','1','123',123])) //[1,2,123]

// ---------------------------------------------------------------------------

// Given 2 string parameters, show a concatenation of:
// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
// function reverseAndMirror(s1,s2) {
//   let reverseS2 = '';
//   let reverseS1 = '';
//   for (let i = (s2.length - 1); i >= 0; i--) {
//     if (s2[i] === s2[i].toUpperCase()) {
//       reverseS2 += s2[i].toLowerCase();
//     } else {
//       reverseS2 += s2[i].toUpperCase();
//     }
//   }

//   for (let i = (s1.length - 1); i >= 0; i--) {
//     if (s1[i] === s1[i].toUpperCase()) {
//       reverseS1 += s1[i].toLowerCase();
//     } else {
//       reverseS1 += s1[i].toUpperCase();
//     }
//   }

//   return `${reverseS2}@@@${reverseS1}${reverseS1.split('').reverse().join('')}`;
// }


// console.log(reverseAndMirror("FizZ", "buZZ")) //"zzUB@@@zZIffIZz"
// console.log(reverseAndMirror("String Reversing", "Changing Case")) //"ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING"

// ---------------------------------------------------------------------------
// Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:
// Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"

// function naughtyOrNice(data) {
//   let niceCount = 0;
//   let naughtyCount = 0;

//   for (let month in data) {
//     for (let day in data[month]) {
//       if (data[month][day] === "Naughty") {
//         naughtyCount += 1;
//       }

//       if (data[month][day] === "Nice") {
//         niceCount += 1;
//       }
//     }
//   }

//   return niceCount >= naughtyCount ? 'Nice!' : 'Naughty!';
// }

// console.log(naughtyOrNice({"January": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "February": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice"}, "March": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "April": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "May": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, "June": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice"}, "July": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "August": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, "September": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice"}, "October": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "November": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "December": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}})) //"Nice!"
// console.log(naughtyOrNice({"January": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Nice", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Nice", "24": "Nice", "25": "Nice", "26": "Nice", "27": "Naughty", "28": "Naughty", "29": "Nice", "30": "Nice", "31": "Naughty"}, "February": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Naughty"}, "March": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Naughty", "8": "Nice", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Nice", "23": "Nice", "24": "Nice", "25": "Nice", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty", "31": "Naughty"}, "April": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Naughty", "30": "Nice"}, "May": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Naughty", "29": "Nice", "30": "Nice", "31": "Naughty"}, "June": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Nice", "29": "Naughty", "30": "Naughty"}, "July": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Naughty", "15": "Nice", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Nice", "29": "Nice", "30": "Nice", "31": "Naughty"}, "August": {"1": "Naughty", "2": "Naughty", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Nice", "31": "Nice"}, "September": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Nice", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Nice"}, "October": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Naughty", "15": "Naughty", "16": "Nice", "17": "Nice", "18": "Nice", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Nice", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty", "31": "Naughty"}, "November": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Naughty"}, "December": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Nice", "17": "Nice", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Naughty"}})) //"Nice!"
// console.log(naughtyOrNice({"January": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Nice", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Naughty", "21": "Naughty", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Naughty", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "February": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Naughty"}, "March": {"1": "Naughty", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Nice", "19": "Naughty", "20": "Naughty", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Naughty", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "April": {"1": "Nice", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Nice", "25": "Nice", "26": "Naughty", "27": "Naughty", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "May": {"1": "Nice", "2": "Naughty", "3": "Naughty", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Naughty", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Nice", "29": "Nice", "30": "Naughty", "31": "Naughty"}, "June": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Naughty", "21": "Naughty", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Naughty", "30": "Naughty"}, "July": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Nice", "31": "Naughty"}, "August": {"1": "Nice", "2": "Naughty", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Naughty", "31": "Naughty"}, "September": {"1": "Nice", "2": "Naughty", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Naughty", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Naughty", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "October": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Naughty", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Nice", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Nice"}, "November": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Nice", "29": "Naughty", "30": "Nice"}, "December": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Naughty", "29": "Naughty", "30": "Naughty", "31": "Nice"}})) // "Naughty!"

// ---------------------------------------------------------------------------

// Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and return a list of snapshots after each change of the initial list.
// e.g.
// If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.

// function bubble(arr) {
//   const resultArr = [];
//   let swapped;

//   for (let j = 0; j < arr.length - 1; j++) {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1 - j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         resultArr.push([...arr]);
//         swapped = true;
//       }
//     }

//     if (!swapped) {
//       break;
//     }
//   }

//   return resultArr
// }

// console.log(bubble([2,1,4,3])) //[[1,2,4,3],[1,2,3,4]]
// console.log(bubble([1,4,3,6,7,9,2,5,8]))  //[
//       // [1, 3, 4, 6, 7, 9, 2, 5, 8],
//       // [1, 3, 4, 6, 7, 2, 9, 5, 8],
//       // [1, 3, 4, 6, 7, 2, 5, 9, 8],
//       // [1, 3, 4, 6, 7, 2, 5, 8, 9],
//       // [1, 3, 4, 6, 2, 7, 5, 8, 9],
//       // [1, 3, 4, 6, 2, 5, 7, 8, 9],
//       // [1, 3, 4, 2, 6, 5, 7, 8, 9],
//       // [1, 3, 4, 2, 5, 6, 7, 8, 9],
//       // [1, 3, 2, 4, 5, 6, 7, 8, 9],
//       // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     // ]
// console.log(bubble([1,2,3,4])) //[]

// --------------------------------------------------------------------------

// There are just some things you can't do on television. In this case, you've just come back from having a "delicious" Barth burger and you're set to give an interview. The Barth burger has made you queezy, and you've forgotten some of the import rules of the "You Can't Do That on Television" set.
// If you say any of the following words a large bucket of "water" will be dumped on you: "water", "wet", "wash" This is true for any form of those words, like "washing", "watered", etc.
// If you say any of the following phrases you will be doused in "slime": "I don't know", "slime"
// If you say both in one sentence, a combination of water and slime, "sludge", will be dumped on you.
// Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.

// function bucketOf(str) {
//   const lowerStr = str.toLowerCase();
//   const water = lowerStr.includes('water') || lowerStr.includes('wet') || lowerStr.includes('wash')
//   const slime = lowerStr.includes("i don't know") || lowerStr.includes('slime')

//   if (water && slime) {
//     return 'sludge'
//   } else if (water) {
//     return 'water'
//   } else if (slime) {
//     return 'slime'
//   } else {
//     return 'air'
//   }
// }

// console.log(bucketOf("What is that, WATER?!?")) //"water"
// console.log(bucketOf("I don't know if I'm doing this right.")) //"slime"
// console.log(bucketOf("You won't get me!")) //"air"

// --------------------------------------------------------------------------

// You order a shirt for your friend that has a word written in sign language on it, you would like to fool your friend into thinking it says something other than what it actually says.
// Your friend is smart, but he can't know what he doesn't already know, he only knows a certain amount of letters in sign language. Given the word on the shirt, the word you are attempting to make your friend believe is on the shirt, and the letters in sign language your friends knows, figure out if he can tell that you are fooling him. Return true if your friend can figure out you are fooling him, otherwise return false.
// It is guaranteed that both words will be the same length and will be in lowercase letters (a-z)
// function gaslighting(shirtWord, yourWord, friendsLetters) {
//   for ( let i = 0; i < shirtWord.length; i++) {
//     if (shirtWord[i] !== yourWord[i] && (friendsLetters.includes(shirtWord[i]) || friendsLetters.includes(yourWord[i]))) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(gaslighting("snack","snake","c")) //true
// console.log(gaslighting("snack","snack","snack")) //false
// console.log(gaslighting("snake","snack","c")) //true
// console.log(gaslighting("ping","pong","png")) //false
// console.log(gaslighting("ping","pong","i")) //true

// --------------------------------------------------------------------------

// Alireza and Ali have a 3×3 table and playing on that. They have 4 tables (2×2) A,B,C and D in this table.
// At beginning all of 9 numbers in 3×3 table is zero.
// Alireza in each move choose a 2×2 table from A, B, C and D and increase all of 4 numbers in that by one.
// He asks Ali, how much he increase table A, B, C and D. (if he cheats you should return [-1])
// Your task is to help Ali.
// function tableGame(table) {
//   const [firstLine, secondLine, lastLine] = table

//   for (let i = 0; i < firstLine.length; i++) {
//     if (firstLine[i] + lastLine[i] !== secondLine[i]) {
//       return [-1]
//     }
//   }

//   return [firstLine[0], firstLine[firstLine.length - 1], lastLine[0], lastLine[lastLine.length - 1]]
// }

// console.log(tableGame([[1,2,1], [2,4,2], [1,2,1]])) //[1, 1, 1, 1]
// console.log(tableGame([[3,7,4], [5,16,11], [2,9,7]])) //[3, 4, 2, 7]
// console.log(tableGame([[1,4,2], [5,10,5], [4,7,3]])) //[-1]
// console.log(tableGame([[2,4,2], [4,6,4], [2,4,2]])) //[-1]
// console.log(tableGame([[2,4,2], [4,8,4], [2,4,2]])) //[2, 2, 2, 2]
// console.log(tableGame([[1,3,2], [5,10,5], [4,7,3]])) //[1, 2, 4, 3]
// console.log(tableGame([[1,2,1], [1,2,1], [1,2,1]])) //[-1]

// --------------------------------------------------------------------------

// You have some people who are betting money, and they all start with the same amount of money (this number>0).
// Find out if the given end-state of amounts is possible after the betting is over and money is redistributed.
// function learnCharitableGame(arr) {
//   const summElement = arr.reduce((sum, number) => {
//     return sum += number
//   }, 0)

//   if (summElement % arr.length === 0 && summElement !== 0) {
//     return true
//   } else { return false}
// }

// console.log(learnCharitableGame([0, 56, 100])) //true
// console.log(learnCharitableGame([100, 100, 100, 90, 1, 0, 0])) //false
// console.log(learnCharitableGame([0, 0, 0, 0])) //false
// console.log(learnCharitableGame([33, 19, 38, 87, 93, 4])) //false
// console.log(learnCharitableGame([11])) //true

// --------------------------------------------------------------------------

// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
// It is guaranteed that a and b are both present in arr.
// function consecutive(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] === a && arr[i + 1] === b) || (arr[i] === b && arr[i + 1] === a)) {
//       return true
//     }
//   }

//   return false
// }

// console.log(consecutive([1, 3, 5, 7], 3, 7)) //false
// console.log(consecutive([1, 3, 5, 7], 3, 1)) //true
// console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)) //true

// --------------------------------------------------------------------------

// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.
// function decode (code, n) {
//   const codeTable = {
//     1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j',
//     11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's',
//     20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z',
//   }

//   const stringN = String(n);

//   const newWord = code.map((item, index) => {
//     return index < stringN.length
//       ?
//       item -= Number(stringN[index])
//       :
//       item -= Number(stringN[index % stringN.length]);
//   })

//   return newWord.map((item) => codeTable[item])
//                 .join('');
// }

// console.log(decode([ 20, 12, 18, 30, 21], 1939)) //"scout"
// console.log(decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)) //"masterpiece"

// --------------------------------------------------------------------------
// Task
// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.
// function rounders(value) {
//   const arrOfValue = String(value).split('')

//   for (let i = (arrOfValue.length - 1); i > 0; i-- ) {
//     if (arrOfValue[i] >= 5) {
//       arrOfValue[i - 1] = Number(arrOfValue[i - 1]) + 1;
//     }
//     arrOfValue[i] = 0;
//   }

//   return Number(arrOfValue.join(''))
// }

// console.log(rounders(15)) //20
// console.log(rounders(1234)) //1000
// console.log(rounders(1445)) //2000
// console.log(rounders(14)) //10
// console.log(rounders(99)) //100
// console.log(rounders(10)) //10


//-----------------------------------------------------
//-----------------------6kyu--------------------------
//-----------------------------------------------------
// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value
// function solve(arr){
//   const objOfNumber = {};

//   arr.forEach((item) => {
//     objOfNumber[item] = (objOfNumber[item] || 0) + 1;
//   })

//   arr.sort((a, b) => {
//     if (objOfNumber[a] === objOfNumber[b]) {
//       return a - b;
//     }
//     return objOfNumber[b] - objOfNumber[a];
//   });

//   return arr;
// }

// console.log(solve([2,3,5,3,7,9,5,3,7])) //[3,3,3,5,5,7,7,2,9]
// console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1])) //[1,1,1,0,0,6,6,8,8,2,3,5,9]
// console.log(solve([5,9,6,9,6,5,9,9,4,4])) //[9,9,9,9,4,4,5,5,6,6]
// console.log(solve([4,4,2,5,1,1,3,3,2,8])) //[1,1,2,2,3,3,4,4,5,8]
// console.log(solve([4,9,5,0,7,3,8,4,9,0])) //[0,0,4,4,9,9,3,5,7,8]

//-----------------------------------------------------

// Your job is to group the words in anagrams.
// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.
// function groupAnagrams(words){
//   const anagramGroups = {};

//   words.forEach((word) => {
//     const sortedWord = word.split('').sort().join('');
//     if (anagramGroups[sortedWord]) {
//       anagramGroups[sortedWord].push(word);
//     } else {
//       anagramGroups[sortedWord] = [word];
//     }
//   });

//   return Object.values(anagramGroups)
// }

// console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))
// [
  // ["tsar", "star", "tars"],
  // ["rat", "tar"],
  // ["cheese"]
// ]
// console.log(groupAnagrams(["rat", "tar", "star"])) //[["rat", "tar"], ["star"]]

//---------------------------------------------------------------------------

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// function findUniq(arr) {
//   const objOfArr = {};

//   arr.forEach((item, index) => {
//     if (objOfArr[item]) {
//       objOfArr[item] += 1;
//     } else {
//       objOfArr[item] = 1;
//     }
//   })

//   for (let key in objOfArr) {
//     if (objOfArr[key] === 1) {
//       return Number(key)
//     }
//   }
// }

// // clever
// // function findUniq (arr) {
// //   arr.sort();

// //   if (arr[0] === arr[1]) {
// //     return arr[arr.length - 1]
// //   } else {
// //     return arr[0]
// //   }
// // }

// console.log(findUniq([ 1, 0, 0 ])) //1
// console.log(findUniq([ 0, 1, 0 ])) //1
// console.log(findUniq([ 0, 0, 1 ])) //1
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) //2
// console.log(findUniq([ 1, 1, 2, 1, 1 ])) //2
// console.log(findUniq([ 3, 10, 3, 3, 3 ])) //10

//---------------------------------------------------------------------------

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.
// Courtesy of projecteuler.net (Problem 1)
// function solution(number){
//   let sum = 0;

//   if (number <= 0) {
//     return 0;
//   }

//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i
//     }
//   }

//   return sum
// }

// console.log(solution(3)) // 3
// console.log(solution(5)) // 8
// console.log(solution(10)) // 23
// console.log(solution(15)) // 45
// console.log(solution(20)) // 78

//---------------------------------------------------------------------------

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// function spinWords(string){
//   return string.split(' ')
//                 .map((word) => word.length >= 5 ? word.split('').reverse().join(''): word)
//                 .join(' ')
// }

// console.log(spinWords("Welcome")) //"emocleW"
// console.log(spinWords("Hey fellow warriors")) //"Hey wollef sroirraw"
// console.log(spinWords("This is a test")) //"This is a test"
// console.log(spinWords("This is another test")) //"This is rehtona test"
// console.log(spinWords("You are almost to the last test")) //"You are tsomla to the last test"
// console.log(spinWords("Just kidding there is still one more")) //"Just gniddik ereht is llits one more"
// console.log(spinWords("Seriously this is the last one")) //"ylsuoireS this is the last one"
// console.log(spinWords("Seriously this is the last one")) //"ylsuoireS this is the last one"

//---------------------------------------------------------------------------

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// function findOdd(A) {
//   const numberOfRepetitions = {};

//   A.forEach((number) => {
//     if (numberOfRepetitions[number]) {
//       numberOfRepetitions[number] += 1
//     } else {
//       numberOfRepetitions[number] = 1
//     }
//   })

//   return Number(Object.keys(numberOfRepetitions).find((key) => numberOfRepetitions[key] % 2 !== 0))
// }

// console.log(findOdd([7])) //7
// console.log(findOdd([0])) //0
// console.log(findOdd([1,1,2])) //2
// console.log(findOdd([0,1,0,1,0])) //0
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])) //5
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])) //-1
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])) //5
// console.log(findOdd([10])) //10
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])) //10
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])) //1

//---------------------------------------------------------------------------

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// function likes(names) {
//   let resultString = '';


//   if (names.length <= 0) {
//     resultString = 'no one'
//   } else if (names.length === 1) {
//     resultString = names[0]
//   } else if (names.length === 2) {
//     resultString = `${names[0]} and ${names[1]}`
//   } else if (names.length === 3){
//     resultString = `${names[0]}, ${names[1]} and ${names[2]}`
//   } else {
//     resultString = `${names[0]}, ${names[1]} and 2 others`
//   }

//   return `${resultString} likes this`
// }

// console.log(likes([])) //'no one likes this'
// console.log(likes(['Peter'])) //'Peter likes this'
// console.log(likes(['Jacob', 'Alex'])) //'Jacob and Alex like this'
// console.log(likes(['Max', 'John', 'Mark'])) //'Max, John and Mark like this'
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //'Alex, Jacob and 2 others like this

//---------------------------------------------------------------------------

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// function digitalRoot(n) {
//   let resultNumber = 0

//   for (let i = 0; i <= (String(n).length - 1); i++) {
//     resultNumber += Number(String(n)[i])
//   }

//   if (String(resultNumber).length < 2) {
//     return resultNumber
//   } else {
//     return digitalRoot(resultNumber)
//   }

//   // Better
//   // while (n >= 10) {
//   //   n = [...String(n)].reduce((acc, digit) => acc + Number(digit), 0);
//   // }
//   // return n;
// }

// console.log(digitalRoot(16)) //1 + 6 = 7
// console.log(digitalRoot(942)) //9 + 4 + 2 = 15  -->  1 + 5 = 6
// console.log(digitalRoot(132189)) //1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// console.log(digitalRoot(493193)) //4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//---------------------------------------------------------------------------

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other:

// function arrayDiff(a, b) {
//   for (let i = 0; i < b.length; i++) {
//     a = a.filter((number) => number !== b[i])
//   }

//   return a
// }

// console.log(arrayDiff([1,2], [1])) //[2], "a was [1,2], b was [1]"
// console.log(arrayDiff([1,2,2], [1])) //[2,2], "a was [1,2,2], b was [1]"
// console.log(arrayDiff([1,2,2], [2])) //[1], "a was [1,2,2], b was [2]"
// console.log(arrayDiff([1,2,2], [])) //[1,2,2], "a was [1,2,2], b was []"
// console.log(arrayDiff([], [1,2])) //[], "a was [], b was [1,2]"
// console.log(arrayDiff([1,2,3], [1,2])) //[3], "a was [1,2,3], b was [1,2]"

//---------------------------------------------------------------------------

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
// function createPhoneNumber(numbers){
//   if (numbers.length !== 10) {
//     return 'incorrect number of digits';
//   }

//   return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //"(123) 456-7890"
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) //"(111) 111-1111"
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //"(123) 456-7890"

//---------------------------------------------------------------------------

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// const countBits = function(n) {
//   const binary = n.toString(2);
//   let count = 0;
//   for (let i = 0; i < String(binary).length; i++) {
//     if (String(binary)[i] === '1') {
//       count += 1;
//     }
//   }

//   return count;

// //Clever
// //return n.toString(2).replace(/0/g,'').length;
// }

// console.log(countBits(0)) //0
// console.log(countBits(4)) //1
// console.log(countBits(7)) //2
// console.log(countBits(9)) //2
// console.log(countBits(10)) //2

//---------------------------------------------------------------------------

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// function findOutlier (integers){
//   const newIntegers = integers.filter((item) => item % 2 !== 0)

//   if (newIntegers.length === 1) {
//     return newIntegers[0]
//   } else {
//     return integers.filter((item) => item % 2 === 0)[0]
//   }

//   //Better
//   //  const isEven = integers.filter(item => item % 2 === 0).length < 2;
//   //  return integers.find(item => isEven ? item % 2 !== 0 : item % 2 === 0);

// }

// console.log(findOutlier([0, 1, 2])) //1
// console.log(findOutlier([1, 2, 3])) //2
// console.log(findOutlier([2,6,8,10,3])) //3
// console.log(findOutlier([0,0,3,0,0])) //3
// console.log(findOutlier([1,1,0,1,1])) //0
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) //11
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // 160

//---------------------------------------------------------------------------


