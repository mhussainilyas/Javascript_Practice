// ====================================================================================
//  1. For an array with marks of students find the average marks of the entire class.
// ====================================================================================

// let marks = [5, 10, 15, 7];
// let sum = marks.reduce((accum, currVal) => {
//   return accum + currVal;
// });
// let average = sum / marks.length;
// console.log(`sum is: ${sum}`);
// console.log(`Average marks of the entire class is: ${average}`);

// ==============================================================
//  2. Create an array with the given length(n) and fill with 0.
// ==============================================================

// let lengthOfArr = Number(prompt("Enter the length of array 😊"));
// let arr = new Array(lengthOfArr).fill(0);
// console.log(arr);

// =====================================================================================
//  3. Create an array with the given length (n) and store natural numbers from 1 to n.
// =====================================================================================

// 👉 1st method
// let lengthOfArr = Number(prompt("Enter the length of array: 😊"));
// let arr = new Array(lengthOfArr);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = i + 1;
// }
// console.log(arr);

// 👉 2nd method
// let lengthOfArr = Number(prompt("Enter the length of array: 😊"));
// let arr = new Array(lengthOfArr).fill(0);
// arr.forEach((val, index) => {
//   arr[index] = index + 1;
// });
// console.log(arr);

// =======================================================================
//  4. Consider an array of mcu heroes
//     (ironman, captain, black widow, wanda, hulk, black panther). Now:
//     a) Add spiderman at the end and thor at the start.
//     b) Remove black widow and add hawkeye in its place.
//     c) Check whether captain is present in the array.
// =======================================================================

// let heroes = [
//   "ironman",
//   "captain",
//   "black widow",
//   "wanda",
//   "hulk",
//   "black panther",
// ];
// console.log(heroes);

// 👉 (a)
// heroes.push("spiderman");
// heroes.unshift("thor");
// console.log(heroes);

// 👉 (b)
// heroes.splice(3, 1, "hawkeye");
// console.log(heroes);

// 👉 (c)
// let isInclude = heroes.includes("captain")
// console.log(isInclude);

// =========================================================
//  5. * How to check if given thing is array or not?
//     * How to convert other datatypes to array?
//     * What if we try to convert an object into an array?
// =========================================================

// 👉 1st part
// let a = ["Hussain"];
// let a = "Hussain";
// let result = Array.isArray(a);
// console.log(result);

// 👉 2nd part
// let str = "Hussain";
// let arr = Array.from(str);
// console.log(arr);

// 👉 3rd part
// let obj = {
//   name: "Hussain",
//   age: 20,
// };
// let arr = Array.from(obj);
// console.log(arr);

// =========================================================================
//  6. We have three variables a, b, c, d
//     a contains any number,
//     b contains any string,
//     c contains any object,
//     d contains any array.
//     Can we create an array from all these four variables? If yes, How?
// =========================================================================

// let a = 126177;
// let b = "Hussain";
// let c = { name: "Hussain", age: 20 };
// let d = ["reading", "sleeping", "coding"];

// let arr = Array.of(a, b, c, d);
// console.log(arr);

// ======================================================
//  7. Check whether given string is palindrome or not.
// ======================================================

// let str = prompt("Enter a string: ");
// let rStr = Array.from(str).reverse().join("");
// if(str === rStr) {
//     console.log(`${str} is palindrome.`);
// } else {
//     console.log(`${str} is not palindrome.`);
// }

// =============================================================
//  8. Capitalize the first letter of every word in a sentence.
// =============================================================

let sentence = "hello     i'm !muhammad hussain";
console.log(sentence);

// let arr = sentence.split(" ");

// 👉 Better (cleaner) version
let arr = sentence.match(/\b[\w'-]+\b/g);

let capitalizeArr = arr.map((val, index) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
});

let capitalizeStr = capitalizeArr.join(" ");

console.log(capitalizeStr);