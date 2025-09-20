// =====================================================================
// 🚀 What is a pure function, and why is it useful in UI rendering? 🎯
// =====================================================================

// Defination:
// A pure function is a function that, given the same inputs, always produces the same output and has no side effects.
// In UI rendering, pure functions are useful because they ensure that the UI remains consistent and predictable.
// This means that when the state of the application changes, the UI can be re-rendered reliably without unexpected behavior.

// =================================================================
// 🚀 How would you use .map() to transform a list of products into
//    a list of HTML elements? 🎯
// =================================================================

// let products = [
//   { id: 1, name: "Laptop", price: 32999 },
//   { id: 2, name: "Computer", price: 49999 },
//   { id: 3, name: "Tablet", price: 1999 },
// ];

// let transformProducts = products.map((product) => {
//   let { name, price } = product;
//   return `
//       <div class="product-card">
//         <h2>${name}</h2>
//         <p>$${price}</p>
//       </div>
//     `;
// });

// console.log(transformProducts.join(""));

// ================================================================================
// 🚀 How do you use .reduce() to calculate the total price in a shopping cart? 🎯
// ================================================================================

// let cart = [
//   { id: 1, name: "laptop", price: 999, quantity: 1 },
//   { id: 2, name: "Computer", price: 699, quantity: 3 },
//   { id: 3, name: "Tablet", price: 499, quantity: 5 },
// ];

// let totalPrice = cart.reduce((acc, product) => {
//   let { price, quantity } = product;
//   return acc + price * quantity;
// }, 0);

// console.log(`Your Total Bill is: $${totalPrice.toLocaleString("en-PK")}`);

// =======================================================================
// 🚀 Explain immutability and how you would update an object in an array
//    without mutating the original. 🎯
// =======================================================================

// Immutability is a concept where data cannot be changed after it has been created.
// Instead of modifying the original data, you create a new copy with the desired changes.

// let user = { name: "Hussain", age: 20 };

// function updateUser(user, newAge) {
//     return { ...user, age: newAge };
// }

// let updatedUser = updateUser(user, 19);
// console.log("Updated user:", updatedUser);
// console.log("user:", user);

// ================================================================================
// 🚀 How would you compose multiple functions to transform data step-by-step
//    (e.g., sanitize → trim → capitalize)? Scenario: You’re preparing user input
//    before storing it. (Expected knowledge: Function composition, chaining, pipe
//    or compose logic.) 🎯
// ================================================================================

// 👉 Chaining
// ============

// let str = "Muhammad Hussain";

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// let result = reverseStr(str);
// console.log(result);

// 👉 Function Composition
// ========================

// let str = "Muhammad Hussain";

// const splitStr = (str) => str.split("");
// const reverseArr = (arr) => arr.reverse();
// const joinArr = (arr) => arr.join("");

// let reverseString = joinArr(reverseArr(splitStr(str)));
// console.log(reverseString);

// 👉 Compose v/s Pipe
// ====================

// const trimStr = (str) => str.trim();
// const sanitizeStr = (str) => str.replaceAll(/[^a-zA-Z0-9 ]/g, "");
// const capitalizeStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// 👉 Compose (Right to Left)

// function compose(...fns) {
//   return function (str) {
//     return fns.reduceRight((acc, currFn) => {
//       return currFn(acc);
//     }, str);
//   };
// }

// let transformStr = compose(
//   capitalizeStr,
//   sanitizeStr,
//   trimStr
// )("  hussain#142%^");
// console.log(transformStr);

// 👉 Pipe (Left to Right)

// function pipe(...fns) {
//   return function (str) {
//     return fns.reduce((acc, currFn) => {
//       return currFn(acc);
//     }, str);
//   };
// }

// let transformStr2 = pipe(
//   trimStr,
//   sanitizeStr,
//   capitalizeStr
// )("  hussain#142%^");
// console.log(transformStr2);

// ===================================================
// 🚀 What is the difference between forEach and map,
//    and when is it wrong to use map? 🎯
// ===================================================

// ✅ Rule of Thumb
// Use map when you want to transform data into a new array.
// Use forEach when you just want to do something with each item (side effects).

// =========================================================================
// 🚀 How do you implement your own version of .map() function on arrays? 🎯
// =========================================================================

// let arr = [6, 5, 4, 3, 2, 1];

// const squareOfNum = (num) => num * num;
// const cubeOfNum = (num) => num * num * num;
// const diameterOfRafius = (r) => 2 * r;

// function calculate(logicFunction) {
//   let outputArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     outputArr.push(logicFunction(arr[i]));
//   }
//   return outputArr;
// }

// Array.prototype.myMap = calculate;
// let result = arr.myMap(cubeOfNum);
// console.log(result);
