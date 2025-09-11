// =====================================================================
// 1) 🚀 Create a function that returns the last element of an array. 🎯
// =====================================================================

// let users = ["Hussain", "Suleman", "Zaryab"];

// function getLastArrayElement(arr) {
//   let element = arr[arr.length - 1];
//   return element;
// }

// let result = getLastArrayElement(nums);
// console.log(result);

// =============================================
// 2) 🚀 Find the combination of two arrays. 🎯
// =============================================

// let arr1 = [1, 2, 3];
// let arr2 = [5, 6, 8];

// let combinationArr = arr1.concat(arr2);
// console.log(combinationArr);

// ====================================================
// 3) 🚀 Generate a random integer between 0 to 18. 🎯
// ====================================================

// function getRandomNumber(min, max) {
//   let number = Math.floor(Math.random() * (max - min + 1)) + min;
//   return number;
// }

// let result = getRandomNumber(0, 18);
// console.log(result);

// ================================================================================
// 4) 🚀 Create a function that takes an array containing both numbers and strings,
//    and returns a new array containing only the string values. 🎯
// ================================================================================

// let arr = ["Hussain", 123, 534, "142", 23, "000"];

// function getstringArr(arr) {
//   let newArr = arr.filter((item) => {
//     return typeof item === "string";
//   });
//   return newArr;
// }

// let result = getstringArr(arr);
// console.log(result);

// ==============================================
// 5) 🚀 Find the maximum number in an array. 🎯
// ==============================================

// let arr = [1987, 1546, 1246, 1423, 1231];

// function getMaxNumber(arr) {
//   let maxNum = Math.max(...arr);
//   return maxNum;
// }

// let result = getMaxNumber(arr);
// console.log(result);

// ================================================================
// 6) 🚀 Write a function that returns the length of a given object
//       i.e., (number of keys). 🎯
// ================================================================

// let person = {
//   fname: "Muhammad",
//   lname: "Hussain",
//   age: 20,
//   city: "Lahore",
// };

// function findObjectLength(obj) {
//   let keys = Object.keys(obj);
//   return keys.length;
// }

// let length = findObjectLength(person);
// console.log(length);

// ======================================================
// 7) 🚀 In an array of objects filter out those objects
//       which have gender's value male. 🎯
// ======================================================

// let users = [
//   { id: 1, name: "Hussain", gender: "male" },
//   { id: 2, name: "Javeria", gender: "female" },
//   { id: 3, name: "Shoaib", gender: "male" },
//   { id: 4, name: "Hania", gender: "female" },
//   { id: 5, name: "Zainab", gender: "female" },
// ];

// function getMaleUsers(arr) {
//   let newArr = arr.filter((user) => {
//     return user.gender === "male";
//   });
//   return newArr;
// }

// let maleUsers = getMaleUsers(users);
// console.log(maleUsers);

// ====================================================
// 8) 🚀 Given an array of strings, return a new array
//       where all strings are in uppercase. 🎯
// ====================================================

// let students = ["Hussain", "Suleman", "Zaryab"];

// function setUppercaseArrOfStr(arr) {
//   let newArr = arr.map((str) => {
//     return str.toUpperCase();
//   });
//   return newArr;
// }

// let uppercaseArrOfStr = setUppercaseArrOfStr(students);
// console.log(uppercaseArrOfStr);

// ===================================================
// 9) 🚀 Check if an object is empty (has no keys). 🎯
// ===================================================

// let person = {};

// function isEmptyObject(obj) {
//   let objKeys = Object.keys(obj).length;
//   return objKeys < 1 ? "empty" : "not empty";
// }

// let result = isEmptyObject(person);
// console.log(result);

// ========================================================================
// 10) 🚀 Create an array of numbers and double each value using .map(). 🎯
// ========================================================================

// let nums = [2, 4, 6, 8, 10];

// function doubleArrayElements(arr) {
//   return arr.map((num) => {
//     return num * 2;
//   });
// }

// let result = doubleArrayElements(nums);
// console.log(result);

// ===========================================================================
// 11) 🚀 Convert an array of strings into a single comma-separated string. 🎯
// ===========================================================================

// let users = ["Hussain", "Suleman", "Zaryab"];

// function singleCommaSeparatedArr(arr) {
//   let newArr = arr.join(",");
//   return newArr;
// }

// console.log(singleCommaSeparatedArr(users));

// ===================================================================
// 12) 🚀 Write a function to flatten a nested array (one level deep).
//        (e.g., [1, [2, 3], 4] → [1, 2, 3, 4]) 🎯
// ===================================================================

// let arr = [1, [2, 3], 4, [5, [6, 7], 8], 9];

// function flattenArr(arr) {
//   let newArr = arr.flat(1);
//   return newArr;
// }

// let result = flattenArr(arr);
// console.log(result);

// ===============================================================================
// 13) 🚀 Write a function that checks if all elements in an array are numbers. 🎯
// ===============================================================================

// let arr = [324, 765, 72];

// 👉 1st method
// function isAllNumber(arr) {
//   let isNum = true;
//   arr.forEach((elem) => {
//     if (typeof elem !== "number") {
//       isNum = false;
//     }
//   });
//   return isNum;
// }

// 👉 2nd method
// function isAllNumber(arr) {
//   return arr.every((elem) => {
//     return typeof elem === "number";
//   });
// }

// console.log(isAllNumber(arr));

// ==========================================================================
// 14) 🚀 Build a simple isPrime() function to check if a number is prime. 🎯
// ==========================================================================

// let num = 31;

// function isPrime(num) {
//   let result = true;
//   if (num === 0 || num === 1) {
//     result = false;
//   } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         result = false;
//         break;
//       }
//     }
//   }
//   return result;
// }

// let answer = isPrime(num);
// console.log(answer);

// ========================================================================
// 15) 🚀 Create a function that removes duplicate values from an array. 🎯
// ========================================================================

// let arr = [10, 20, 30, 10, 40, 50, 20];

// 👉 1st method
// function getUniqueElemArr(arr) {
//   let uniqueSet = new Set(arr);
//   return Array.from(uniqueSet);
// }

// 👉 2nd method
// function getUniqueElemArr(arr) {
//   return arr.filter((elem, index) => {
//     return arr.indexOf(elem) === index;
//   });
// }

// let uniqueArr = getUniqueElemArr(arr);
// console.log(arr);
// console.log(uniqueArr);
