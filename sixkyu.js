//-----------------------6kyu (part 1)--------------------------
//--------------------------------------------------------------
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

// // Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// function duplicateCount(text){
//   const symbolsObj = {};
//   for (let i = 0; i < text.length; i++) {
//     if (text[i].toLowerCase() in symbolsObj) {
//       symbolsObj[text[i].toLowerCase()] += 1;
//     } else {
//       symbolsObj[text[i].toLowerCase()] = 1;
//     }
//   }

//   return Object.values(symbolsObj).filter(item => item !== 1).length
// }

// console.log(duplicateCount("")) //0
// console.log(duplicateCount("abcde")) //0
// console.log(duplicateCount("aabbcde")) //2
// console.log(duplicateCount("aabBcde")) //2
// console.log(duplicateCount("Indivisibility")) //1
// console.log(duplicateCount("Indivisibilities")) //2

//---------------------------------------------------------------------------

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// function duplicateEncode(word){
//   const symbolsObj = {};
//   const newStr = word.toLowerCase();
//   for (let char of newStr) {
//     symbolsObj[char] = (symbolsObj[char] || 0) + 1;
//   }

//   return word.toLowerCase()
//               .split('')
//               .map(symbol => symbolsObj[symbol] > 1 ? ')' : '(')
//               .join('')
// }

// console.log(duplicateEncode("din")) //"((("
// console.log(duplicateEncode("recede")) //"()()()"
// console.log(duplicateEncode("Success")) //")())())"
// console.log(duplicateEncode("(( @")) //"))(("

//---------------------------------------------------------------------------

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// function isValidWalk(walk) {
//   let result = 0;

//   if (walk.length !== 10) {
//     return false;
//   }

//   walk.forEach((direction) => {
//     switch (direction) {
//       case 'n': result -= 1;
//         break;
//       case 's': result += 1;
//         break;
//       case 'e': result += 2;
//         break;
//       case 'w': result -= 2;
//         break;
//       default:
//         return false;
//     }
//   })

//   return result === 0 ? true : false;
// }

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //true
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //false
// console.log(isValidWalk(['w'])) //false
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //false

//---------------------------------------------------------------------------

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// function alphabetPosition(text) {
//   const alphabet = {
//     'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
//     'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
//     'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26,
//   };
//   const result = [];

//   for (let char of text) {
//     if (char.toLowerCase() in alphabet) {
//       result.push(alphabet[char.toLowerCase()]);
//     } else {continue}
//   }

//   return result.join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock.")) //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// console.log(alphabetPosition("The narwhal bacons at midnight.")) //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

//---------------------------------------------------------------------------

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// function persistence(num) {
//   let count = 0;

  // // if (String(num).length === 1) {
  // //   return count
  // // } else {
  // //   count++
  // //   const newNumber = String(num).split('').reduce((acc, number) => {
  // //     return acc *= number;
  // //   }, 1)
  // //   return count + persistence(newNumber)
  // // }

//   //Better
//   while (String(num).length > 1) {
//     count++;
//     num = String(num).split('').reduce((acc, digit) => acc * digit, 1);
//   }

//   return count;
// }

// console.log(persistence(39)) //3
// console.log(persistence(4)) //0
// console.log(persistence(25)) //2
// console.log(persistence(999)) //4

//---------------------------------------------------------------------------

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// function toCamelCase(str){
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '-' || str[i] === '_') {
//       result += str[i + 1].toUpperCase();
//       i++;
//       continue
//     }
//     result += str[i];
//   }

//   return result;
// }

// console.log(toCamelCase('')) //''
// console.log(toCamelCase('the_stealth_warrior')) //theStealthWarrior
// console.log(toCamelCase('The-Stealth-Warrior')) //TheStealthWarrior
// console.log(toCamelCase('A-B-C')) //ABC

//---------------------------------------------------------------------------

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
// This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
// function narcissistic(value) {
//   let result = 0;
//   for (let i = 0; i < String(value).length; i++) {
//     result += Math.pow( String(value)[i], String(value).length);
//   }

//   return result === value;
// }

// console.log(narcissistic(7)) //true
// console.log(narcissistic(153)) //true
// console.log(narcissistic(122)) //false
// console.log(narcissistic(487)) //false

//---------------------------------------------------------------------------

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// function order(words){
  // const arrWords = words.split(' ');
  // const wordsObj = {};
  // arrWords.forEach((word) => {
  //   for (let i = 0; i < word.length; i++) {
  //     if (!(isNaN(Number(word[i])))) {
  //       wordsObj[word[i]] = word;
  //     }
  //   }
  // })

  // return Object.values(wordsObj).join(' ')

  // //Better
  // //   return words.split(' ')
  // //               .sort((a, b) => a.match(/\d/) - b.match(/\d/))
  // //               .join(' ')
// }

// console.log(order("is2 Thi1s T4est 3a")) //"Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //"Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order("")) //""

//---------------------------------------------------------------------------

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
// function tribonacci(signature,n){
//   const signatureClone = structuredClone(signature);
//   if (n < 3) {
//     signatureClone.length = n;
//     return signatureClone;
//   }

//   for (let i = 1; i <= (n - 3); i++) {
//     let newNumber = signatureClone.slice(-3).reduce((sum, elem) => sum + elem, 0);
//     signatureClone.push(newNumber);
//   }

//   return signatureClone;
// }

// console.log(tribonacci([1,1,1], 10)) //[1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0,0,1], 10)) //[0,0,1,1,2,4,7,13,24,44]
// console.log(tribonacci([0,1,1], 10)) //[0,1,1,2,4,7,13,24,44,81]
// console.log(tribonacci([1,0,0], 10)) //[1,0,0,1,1,2,4,7,13,24]
// console.log(tribonacci([0,0,0], 10)) //[0,0,0,0,0,0,0,0,0,0]
// console.log(tribonacci([1,2,3], 10)) //[1,2,3,6,11,20,37,68,125,230]
// console.log(tribonacci([3,2,1], 10)) //[3,2,1,6,9,16,31,56,103,190]
// console.log(tribonacci([1,1,1],  1)) //[1]
// console.log(tribonacci([300,200,100], 0)) //[]

//---------------------------------------------------------------------------

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// function uniqueInOrder (iterable){
//   const result = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== result[result.length - 1]) {
//       result.push(iterable[i]);
//     }
//   }

//   return result;
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD')) //['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3])) //[1,2,3]

//---------------------------------------------------------------------------

// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// If it is the case we will return k, if not return -1.
// Note: n and p will always be strictly positive integers.
// function digPow(n, p){
  // const digits = Array.from(String(n), Number);
  // let sumNumber = 0;
  // for (let i = 0; i < digits.length; i++) {
    // sumNumber += Math.pow(digits[i], p);
    // p++
  // }

  // const result = sumNumber / n;
  // return Number.isInteger(result) ? result : -1;

  // //Better
  // // const x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  // // return x % n ? -1 : x / n
// }

// console.log(digPow(89, 1)) //1
// console.log(digPow(92, 1)) //-1
// console.log(digPow(46288, 3)) //51

//---------------------------------------------------------------------------

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// function isPangram(string){
//   const alpfabet = 'qwertyuiopasdfghjklzxcvbnm';
//   const lowerString = string.toLowerCase();

//   for (let char of alpfabet) {
//     if (lowerString.indexOf(char) === -1) {
//       return false
//     }
//   }

//   return true
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog.")) //true
// console.log(isPangram("This is not a pangram.")) //false

//---------------------------------------------------------------------------

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const firstSum = arr.slice(0, i).reduce((sum, number) => sum + number, 0);
//     const secondSum = arr.slice(i + 1, arr.length).reduce((sum, number) => sum + number, 0);
//     if (firstSum === secondSum) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1])) //3
// console.log(findEvenIndex([1,100,50,-51,1,1])) //1
// console.log(findEvenIndex([1,2,3,4,5,6])) //-1
// console.log(findEvenIndex([20,10,30,10,10,15,35])) //3

//---------------------------------------------------------------------------

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// function solution(str){
//   const result = [];
//   for (let i = 0; i < str.length; i += 2) {
//     if (str[i + 1] === undefined) {
//       result.push(`${str[i]}_`);
//     } else {
//       result.push(`${str[i]}${str[i + 1]}`);
//     }
//   }

//   return result;
// }

// console.log(solution("abcdefg")) //["ab", "cd", "ef"]
// console.log(solution("abcdef")) //["ab", "cd", "ef", "g_"]
// console.log(solution("")) //[]

//---------------------------------------------------------------------------

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// function sortArray(array) {
//   const oddSortedNumbers = array.filter((number) => number % 2 !== 0).sort((a, b) => a - b);
//   const evenNumbers = array.filter((number) => number % 2 === 0);
//   const result = [];
//   let oddIndex = 0;
//   let evenIndex = 0;

//   for (let num of array) {
//     if (num % 2 !== 0) {
//       result.push(oddSortedNumbers[oddIndex]);
//       oddIndex++;
//     } else {
//       result.push(evenNumbers[evenIndex]);
//       evenIndex++;
//     }
//   }

//   return result;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])) //[1, 3, 5, 8, 0]
// console.log(sortArray([])) //[]
// console.log(sortArray([4, 7, 2, 11, 6, 5, 8, 3])) //[4, 3, 2, 5, 6, 7, 8, 11]

//---------------------------------------------------------------------------

// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   if (num <= 3) {
//     return true;
//   }

//   if (num % 2 === 0 || num % 3 === 0) {
//     return false;
//   }

//   const maxCount = Math.sqrt(num);
//   for (let i = 4; i <= maxCount; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(0)) //false
// console.log(isPrime(1)) //false
// console.log(isPrime(2)) //true
// console.log(isPrime(73)) //true
// console.log(isPrime(75)) //false
// console.log(isPrime(-1)) //false
// console.log(isPrime(3)) //true
// console.log(isPrime(5)) //true
// console.log(isPrime(7)) //true
// console.log(isPrime(41)) //true
// console.log(isPrime(5099)) //true
// console.log(isPrime(402523969)) //false

//---------------------------------------------------------------------------

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// function findMissingLetter(array) {
//   const arrayClone = structuredClone(array);
//   let findChar = '';

//   for (let i = 0; i < (arrayClone.length - 1); i++) {
//     if (arrayClone[i + 1].charCodeAt() - arrayClone[i].charCodeAt() === 2) {
//       findChar = arrayClone[i].charCodeAt() + 1;
//       break;
//     }
//   }

//   return String.fromCharCode(findChar);
// }

// console.log(findMissingLetter(['a','b','c','d','f'])) //'e'
// console.log(findMissingLetter(['O','Q','R','S'])) //'P'

//---------------------------------------------------------------------------

// // Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// function towerBuilder(nFloors) {
//   const lastLineLength = nFloors + (nFloors - 1);
//   const result = [];

//   for (let i = lastLineLength; i > 0; i -= 2) {
//     result.push('*'.repeat(i).padStart(i + ((lastLineLength - i) / 2)).padEnd(lastLineLength));
//     // //***or */
//     // //const line = ' '.repeat((nFloors - i) / 2) + '*'.repeat(i) + ' '.repeat((nFloors - i) / 2);
//     // //result.push(line);
//   }

//   return result.reverse();
//   // //return result;
// }


// // console.log(towerBuilder(1)) //["*"]
// // console.log(towerBuilder(2)) //[" * ","***"]
// console.log(towerBuilder(3)) //["  *  "," *** ","*****"]
// console.log(towerBuilder(4)) //['   *   ', '  ***  ', ' ***** ', '*******']

//---------------------------------------------------------------------------

// Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. For example, the score of abad is 8 (1 + 2 + 1 + 4). You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.
// function high(x){
//   const arrayOfWords = x.split(' ');
//   let maxWeigth = 0;
//   let bestWord = '';

//   arrayOfWords.forEach((word) => {
//     let weight = word.split('').reduce((sumChar, char) => sumChar + char.charCodeAt() - 96, 0);

//     if (weight > maxWeigth) {
//       maxWeigth = weight;
//       bestWord = word;
//     }
//   })

//   return bestWord;
// }

// console.log(high('man i need a taxi up to ubud')) //'taxi'
// console.log(high('what time are we climbing up the volcano')) //'volcano'
// console.log(high('take me to semynak')) //'semynak'
// console.log(high('aa b')) //'aa'
// console.log(high('b aa')) //'b'
// console.log(high('bb d')) //'bb'
// console.log(high('d bb')) //'d'
// console.log(high('aaa b')) //'aaa'

//---------------------------------------------------------------------------

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// function deleteNth(arr,n){
//   const arrClone = structuredClone(arr);
//   const repeatCount = {};
//   const result = [];

//   for (let i = 0; i < arrClone.length; i++) {
//     if (repeatCount[arrClone[i]]) {
//       repeatCount[arrClone[i]] += 1;
//     } else {
//       repeatCount[arrClone[i]] = 1;
//     }

//     if (repeatCount[arrClone[i]] <= n) {
//       result.push(arrClone[i])
//     }
//   }

//   return result;
// }

// console.log(deleteNth([20,37,20,21], 1)) //[20,37,21]
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) //[1, 1, 3, 3, 7, 2, 2, 2]
// console.log(deleteNth([1,1,1,1,1,1,1,1,1], 1))
// console.log(deleteNth([12,39,19,39,39,19,12], 1)) //[12, 39, 19]

//---------------------------------------------------------------------------

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// function countSmileys(arr) {
//   let count = 0;
//   const arrClone = structuredClone(arr);

//   arrClone.forEach((face) => {
//     if (face.length > 3) {
//       return false
//     }

//     if (face.length === 3 && (face[1] !== '-' && face[1] !== '~')) {
//       return false;
//     }

//     if ((face[0] === ':' || face[0] === ';')
//           && (face[face.length - 1] === ')' || face[face.length - 1] === 'D')
//       ) {
//         count += 1;
//     }
//   })

//   return count;
// }

// console.log(countSmileys([])) //0
// console.log(countSmileys([':D',':~)',';~D',':)'])) //4
// console.log(countSmileys([':)',':(',':D',':O',':;'])) //2
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //1
// console.log(countSmileys([":---)" , "))" , ";~~D" , ";D"])) //1

//---------------------------------------------------------------------------

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3. You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// function findNb(m) {
//   let kubeCount = 0;
//   let volume = m;

//   for (let i = 1; volume > 0; i++) {
//     volume -= Math.pow(i, 3);
//     kubeCount = i;
//   }

//   if (volume < 0) {
//     return -1;
//   } else {
//     return kubeCount
//   }
// }

// console.log(findNb(4183059834009)) //2022
// console.log(findNb(24723578342962)) //-1
// console.log(findNb(135440716410000)) //4824
// console.log(findNb(40539911473216)) //3568

//---------------------------------------------------------------------------

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid. This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea! All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// function validBraces(braces){
//   const stack = [];
//   const matches = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   };

//   for (let i = 0; i < braces.length; i++) {
//     if (braces[i] in matches) {
//       if (matches[braces[i]] === stack[stack.length - 1]) {
//         stack.pop();
//       } else {return false;}
//     } else {
//       stack.push(braces[i])
//     }
//   }

//   return stack.length ? false : true
// }

// console.log(validBraces("()))")) //false
// console.log(validBraces("()")) //true
// console.log(validBraces("[]")) //true
// console.log(validBraces("{}")) //true
// console.log(validBraces("(){}[]")) //true
// console.log(validBraces("([{}])")) //true
// console.log(validBraces("(}")) //false
// console.log(validBraces("[(])")) //false
// console.log(validBraces("({})[({})]")) //true
// console.log(validBraces("(})")) //false
// console.log(validBraces("(({{[[]]}}))")) //true
// console.log(validBraces("())({}}{()][][")) //false
// console.log(validBraces("{}({})[]")) //true
// console.log(validBraces("(((({{")) //false

//---------------------------------------------------------------------------

// Complete the solution so that the function will break up camel casing, using a space between words.
// function solution(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       result += ` ${string[i]}`;
//     } else {
//       result += string[i];
//     }
//   }

//   return result;
// }

// console.log(solution("")) //""
// console.log(solution("camelCasing")) //"camel Casing"
// console.log(solution("camelCasingTest")) //"camel Casing Test"

//---------------------------------------------------------------------------

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// function longestConsec(strarr, k) {
//   let long = 0;
//   let bestString = '';

//   if (k < 1 || k > strarr.length) {
//     return '';
//   }

//   for (let i = 0; i <= (strarr.length - k); i++) {
//     let workingLine = strarr.slice(i, i + k).join('')
//     if (workingLine.length > bestString.length) {
//       bestString = workingLine
//     }
//   }

//   return bestString
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) //"abigailtheta"
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) //"oocccffuucccjjjkkkjyyyeehh"
// console.log(longestConsec([], 3)) //""
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) //"wlwsasphmxxowiaxujylentrklctozmymu"
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) //""
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) //"ixoyx3452zzzzzzzzzzzz"
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) //""
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) //""

//---------------------------------------------------------------------------

// You will be given a number and you will need to return it as a string in Expanded Form.
// function expandedForm(num) {
//   const stringOfNum = String(num)
//   const arrOfNums = [];

//   for (let i = 0; i < stringOfNum.length; i++) {
//     if (stringOfNum[i] !== '0') {
//       arrOfNums.push(`${stringOfNum[i]}${'0'.repeat(stringOfNum.length - 1 - i)}`);
//     }
//   }

//   return arrOfNums.join(' + ');
// }

// console.log(expandedForm(12)) //'10 + 2'
// console.log(expandedForm(42)) //'40 + 2'
// console.log(expandedForm(70304)) //'70000 + 300 + 4'

