// ==============================================================
// 16) 🚀 What’s the difference between parseInt and Number()? 🎯
// ==============================================================
// 👉 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// let a = "123.534px";
// let num = Number(a);
// let integer = parseInt(a);
// let float = parseFloat(a);

// console.log(a, num, integer, float);

// ===================================================
// 17) 🚀 Why does 0.1 + 0.2 !== 0.3 in JavaScript? 🎯
// ===================================================
// =================================================================
// 18) 🚀 Explain floating-point precision issues in JavaScript. 🎯
// =================================================================

// let isTrue = 0.1 + 0.2 !== 0.3;
// console.log(0.1 + 0.2);
// console.log(isTrue);

// =================================================================
// 19) 🚀 How would you handle high-precision decimal math in JS? 🎯
// =================================================================
// 👉 use "decimal.js" library

// let Decimal = require("decimal.js");

// let num1 = Decimal(0.1);
// let num2 = Decimal(0.2);

// let result = num1.plus(num2);

// console.log(Number(result));

// ===========================================================
// 20) 🚀 What is the difference between slice and splice? 🎯
// ===========================================================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let subArr = arr.slice(1, 4);
// console.log(subArr);
// console.log(arr);

// let newArr = arr.splice(2, 1, 30, 300);
// console.log(newArr);
// console.log(arr);

// ====================================================================
// 21) 🚀 Create a function that reverse each word of a given sentence.
//        E.g., Mai hun manas -> sanam nuh iam 🎯
// ====================================================================

// let str = "mai hun hussain";

// function reverseEachWord(sentence) {
//   let arr = sentence.split(" ");
//   let reverseArr = arr.map((word) => {
//     return word.split("").reverse().join("");
//   });
//   return reverseArr.join(" ");
// }

// let reverseStr = reverseEachWord(str);
// console.log(reverseStr);

// =================================================================
// 22) 🚀 In an array of numbers and strings, only add those numbers
//        which are not strings. 🎯
// =================================================================

// let arr = [10, "hussain", 30, "45", 20];

// function addNumbersOnly(arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   });
//   return sum;
// }

// let result = addNumbersOnly(arr);
// console.log(result);

// =========================================================
// 23) 🚀 How would you check if a number is an integer? 🎯
// =========================================================

// let num = 123;

// 👉 1st method
// function checkInteger(num) {
//   return Number.isInteger(num);
// }

// 👉 2nd method
// function checkInteger(num) {
//   return num % 1 === 0;
// }

// console.log(checkInteger(num));

// =============================================================
// 24) 🚀 Write a JavaScript function that reverse a number. 🎯
// =============================================================

// let num = 15634;
// console.log("Original Number:", num);

// function reverseNumber(num) {
//   let reverseNum = Number(num.toString().split("").reverse().join(""));
//   return reverseNum;
// }

// let reverse = reverseNumber(num);
// console.log("Reverse Number:", reverse);

// =====================================================================
// 25) 🚀 Write a javascript function that returns a passed string with
//        letters in alphabetical order. 🎯
// =====================================================================

// let str = "Muhammad Hussain Ilyas";

// function sortAlphabeticalOrder(str) {
//   let newStr = str.split(" ").sort().join(" ");
//   return newStr;
// }

// let sortedStr = sortAlphabeticalOrder(str);
// console.log(sortedStr);

// =============================================================================
// 26) 🚀 Write a Javascript function that accepts a string as a parameter and
//        converts the first letter of each word of the string in upper case. 🎯
// =============================================================================

// let str = "Hye I'm muhammad hussain ilyas.";

// function capitalizeString(str) {
//   let arr = str.split(/\s+/);
//   let capitalizeArr = arr.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizeArr.join(" ");
// }

// let result = capitalizeString(str);
// console.log(result);

// ================================================================================
// 27) 🚀 Write a javascript function to get the first element of an array. Passing
//        a parameter 'n' will return the first 'n' elements of the array. 🎯
// ================================================================================

// let arr = [2, 3, 4, 5, 7];
// console.log("Array is:", arr);

// function getInitialElements(arr, n) {
//   if (!n) {
//     return arr[0];
//   } else if (n > arr.length) {
//     console.error("You are giving an unexpected index!");
//     return null;
//   } else {
//     return arr.slice(0, n);
//   }
// }

// let result = getInitialElements(arr, 3);
// console.log(result);

// ======================================================================
// 28) 🚀 Write a javascript function to get the number of occurrences of
//        each letter in specified string. 🎯
// ======================================================================

// let str = "Muhammad Hussain";
// console.log("string:", str);

// function getOccurrenceOfLetter(str) {
//   let obj = {};
//   let arr = str.replaceAll(" ", "").toLowerCase().split("");
//   arr.forEach((letter) => {
//     if (obj.hasOwnProperty(letter)) {
//       obj[letter]++;
//     } else {
//       obj[letter] = 1;
//     }
//   });
//   Object.entries(obj).forEach((arr) => {
//     console.log(`${arr[0]} occurs ${arr[1]} times.`);
//   });
// }

// getOccurrenceOfLetter(str);

// ================================================================================
// 29) 🚀 Write a javascript program to find the most frequent item of an array. 🎯
// ================================================================================

// let arr = [1, 3, 4, 7, 2, 3, 7, 5, 3, 2, 4, 7];

// function getMostFrequentItem(arr) {
//   let obj = {};
//   arr.forEach((item) => {
//     if (obj.hasOwnProperty(item)) {
//       obj[item]++;
//     } else {
//       obj[item] = 1;
//     }
//   });

//   let mostFrequentNum = Math.max(...Object.values(obj));

//   let newFilteredArr = Object.entries(obj).filter((arr) => {
//     return arr[1] === mostFrequentNum;
//   });

//   newFilteredArr.forEach((arr) => {
//     console.log(`${arr[0]}`);
//   })
// }

// getMostFrequentItem(arr);

// ==========================================================
// 30) 🚀 Write a javascript program to shuffle an array. 🎯
// ==========================================================

// let arr = [1, 2, 3, 4, 5];
// console.log("Original Array:", arr);

// function getRandomNumber(length) {
//   return Math.floor(Math.random() * length);
// }

// 👉 1st method
// for (let index in arr) {
//   let randomNum = getRandomNumber(arr.length);
//   let temp = arr[index];
//   arr[index] = arr[randomNum];
//   arr[randomNum] = temp;
// }

// 👉 2nd method
// for (let index in arr) {
//   let randomNum = getRandomNumber(arr.length);
//   [arr[randomNum], arr[index]] = [arr[index], arr[randomNum]];
// }

// console.log("Shuffled Array:", arr);

