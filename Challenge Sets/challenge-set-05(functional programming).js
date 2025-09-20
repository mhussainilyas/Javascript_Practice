// ==========================================
// imperative forEach v/s Declarative forEach
// ==========================================

// let arr = [1, 2, 3, 4, 5];

// 🎲 ========= Imperative approach =========

// const logicFunction = (num) => console.log(num * num);

// function customForEach(callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// Array.prototype.myForEach = customForEach;

// arr.myForEach(logicFunction);

// 🎲 ========= Declarative approach =========

// arr.forEach((num) => {
//   console.log(num * num);
// });

// ==================================
// imperative map v/s Declarative map
// ==================================

// let arr = [1, 2, 3, 4, 5];

// 🎲 ========= Imperative approach =========

// function logicFunction(num) {
//   return num * num * num;
// }

// function customMap(callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i], i, arr));
//   }
//   return newArr;
// }

// Array.prototype.myMap = customMap;

// let result = arr.myMap(logicFunction);
// console.log(result);

// 🎲 ========= Declarative approach =========

// let newArr = arr.map((num) => {
//   return num * num * num;
// });

// console.log(newArr);

// ========================================
// imperative filter v/s Declarative filter
// ========================================

// let arr = [10, 23, 45, 60, 72, 91, 100];

// 🎲 ========= Imperative approach =========

// function logicFunction(num) {
//   return num % 2 === 0;
// }

// function customFilter(callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// Array.prototype.myFilter = customFilter;

// let result = arr.myFilter(logicFunction);
// console.log(result);

// 🎲 ========= Declarative approach =========

// let newArr = arr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(newArr);

// ========================================
// imperative reduce v/s Declarative reduce
// ========================================

// let arr = [1, 2, 3, 4, 5];

// 🎲 ========= Imperative approach =========

// function accumlatorFunction(acc, curr) {
//   return acc + curr;
// }

// function customReduce(callback, initialVal) {
//   let acc = initialVal;
//   for (let i = 0; i < arr.length; i++) {
//     acc = callback(acc, arr[i], i, arr);
//   }
//   return acc;
// }

// Array.prototype.myReduce = customReduce;

// let result = arr.myReduce(accumlatorFunction, 10);
// console.log(result);

// 🎲 ========= Declarative approach =========

// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 10);

// console.log(sum);
