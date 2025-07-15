// =====================================================
//   Q1: How do you declare a variable in JavaScript?
// =====================================================

// let name;
// let age, salary;

// ============================================================
//   Q2: What is the difference between var, let, and const?
// ============================================================

// 👉 var
// var a = 1111;
// a = 1234; // reassignment ✔
// var a = 4321; // redeclaration ✔
// if (true) {
//   var b = 1000;
// }
// console.log(b); // (global scope) ✔

// 👉 let
// let b = 1000;
// b = 500; // reassignment ✔
// let b = 600; // redeclaration ❌
// if (true) {
//   let b = 1000;
// }
// console.log(b); // (local scope) ❌

// 👉 const
// const c = 1111;
// c = 1000; // reassignment ❌
// const c = 10000; // redeclaration ❌
// if (true) {
//   const c = 2000;
// }
// console.log(c); // (local scope) ❌

// ======================================================
//   Q3: Can you change the value of a const variable?
// ======================================================

// const name = "Hussain";
// name = "Suleman"; // Error ❌
// console.log(name);

// ====================================================================
//   Q4: What will happen if you use a variable without declaring it?
// ====================================================================

// sum = a + b; // a & b is not defined (Error) ❌
// console.log(sum);

// =============================================================================
//   Q5: What is the default value of an uninitialized variable in JavaScript?
// =============================================================================

// let myName;
// console.log(myName); // undefined

// =========================================================
//   Q6: What are the primitive data types in JavaScript?
// =========================================================

// let num = 1234; // Number
// let empty = null; // Null
// let str = "Hussain"; // String
// let sym = Symbol("Hussain"); // Symbol
// let bool = true; // Boolean
// let bigNum = BigInt(123456789); // BigInt
// let notDefine = undefined // Undefined

// ==========================================================
//   Q7: What is the difference between null and undefined?
// ==========================================================

// 👉 Null
// let a = null;
// console.log(a);
// console.log(typeof a);

// 👉 Undefined
// let b;
// console.log(b);
// console.log(typeof b);

// =======================================================================
//   Q8: Is JavaScript a statically typed or dynamically typed language?
// =======================================================================

// Dynamically Typed Language ✔
// let a = 1234; // here a is number
// a = "Hussain"; // here a is string
// a = true; // here a is boolean

// ===============================================
//   Q9: What will be the output of typeof null?
// ===============================================

// let a = null;
// console.log(typeof a); // object

// =======================================================================
//   Q10: What happens when you add a number and a string in JavaScript?
// =======================================================================

// let num = 1234;
// let str = "Hussain";
// let result = num + str; // concatination
// console.log(result); // output: 1234Hussain

// ================================================
//   Q11: What is type coercion? Give an example.
// ================================================

// 👉 Implicit (automatic) coercion
// let result = "5" + 3;
// console.log(result); // output: 53
// let result = "5" - 3;
// console.log(result); // output: 2

// 👉 Explicit coercion
// let num = 1234;
// let str = String(num);
// let bool = Boolean(num);
// let number = Number(str);

// =========================================================================
//   Q12: How can you manually convert a string to a number in JavaScript?
// =========================================================================

// let str = "Hussain";
// let num = Number(str);
// console.log(typeof num);

// =====================================================
//   Q13: What is the result of "5" - 3 in JavaScript?
// =====================================================

// let result = "5" - 3;
// console.log(result); // output: 2

// ===========================================================================
//   Q14: What is NaN in JavaScript, and how do you check if a value is NaN?
// ===========================================================================

// let result = 0 / 0;
// console.log(result); // NaN
// console.log(typeof result); // number
// console.log(Number.isNaN(result)); // true

// ==============================================================
//  Q15: How do you check the type of a variable in JavaScript?
// ==============================================================

// let num = 1000;
// let str = "Hussain";
// console.log(typeof num); // number
// console.log(typeof str); // string
