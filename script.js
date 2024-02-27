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
function toCsvText(array) {
  return array.map(row => row.join(',')).join('\n');
}

toCsvText([
  [ 0, 1, 2, 3, 45 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]
 ])
// '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'

toCsvText([
  [ -25, 21, 2, -33, 48 ],
  [ 30,31,-32,33,-34 ]
 ])
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
