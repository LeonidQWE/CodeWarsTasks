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
