// ===========================================================================================
//  1. Get user to input two number using prompt and print their possible arithmetic results.
// ===========================================================================================

// let num1 = Number(prompt("Enter 1st number: "));
// let num2 = Number(prompt("Enter 2nd number: "));
// console.log(`${num1} + ${num2} = ${num1 + num2}`);
// console.log(`${num1} - ${num2} = ${num1 - num2}`);
// console.log(`${num1} * ${num2} = ${num1 * num2}`);
// console.log(`${num1} / ${num2} = ${num1 / num2}`);
// console.log(`${num1} % ${num2} = ${num1 % num2}`);
// console.log(`${num1} ** ${num2} = ${num1 ** num2}`);

// ========================================
//  2. Can you chain assignment operators?
// ========================================

// let a = b = c = 10;
// console.log(a);
// console.log(b);
// console.log(c);

// ==================================================================================================
//  3. Get user to input a number using prompt and check whether even or odd using ternary operator.
// ==================================================================================================

// let num = Number(prompt("Enter a number: "));
// let result = num % 2 === 0 ? `${num} is even` : `${num} is odd`;
// console.log(result);

// ==================================
//  4. What is the final value of x?
// ==================================

// let x = 5;
// x += 3; // x = 8
// x -= 2; // x = 6
// x *= 4; // x = 24
// x /= 6; // x = 4
// x %= 3; // x = 1
// console.log(x);

// =======================================================================
//  5. Check if a number is within a range between 10 and 20 (inclusive).
// =======================================================================

// let num = Number(prompt("Enter a number: "));
// let result = (num >= 10 && num <= 20) ? `${num} is within a range` : `${num} is out of range`;
// console.log(result);

// =========================================================================================
//  6. Write a program to find the largest number between 3 numbers using ternary operator.
// =========================================================================================

// let a = 90;
// let b = 50;
// let c = 30;
// let result = a > b ? (a > c ? a : c) : b > c ? b : c;
// console.log(result);

// ===============================================================================
//  7. Take an email and password from the user.
//     If the email or password is incorrect or does not match the stored values,
//     display the message "Invalid email or password."
//     If both email and password match the stored values,
//     display "You are logged in successfully!"
// ================================================================================

// let dbEmail = "h3980796@gmail.com";
// let dbPassword = 126177;
// let userEmail = prompt("Enter your email: ");
// let userPassword = Number(prompt("Enter your password: "));
// if (userEmail && userPassword) {
//   if (userEmail === dbEmail && userPassword === dbPassword) {
//     console.log("You are logged in successfully!");
//   } else {
//     console.log("Invalid email or password!");
//   }
// } else {
//   console.log("Please enter email or password!");
// }

// ===============================================================
//  8. What will be the output of the following JavaScript code?
// ===============================================================

// let a = 5;
// let b = 3;
// let c = 2;
// let result = a++ + --b * c-- - ++a + b-- / --c; // 5 + 2 * 2 - 7 + 2 / 0
// console.log("a:", a); // 7
// console.log("b:", b); // 1
// console.log("c:", c); // 0
// console.log("result:", result); // infinity

// =========================================================
//  9. What is the output of console.log(~a) where a = 0?
// =========================================================

// let a = 0;
// console.log(~a); // -1

// ===============================================================
//  10. What will be the output of the following JavaScript code?
// ===============================================================

// let x = 10;
// let y = 5;
// let z = "10";

// x += y * 2; // 20
// let isEqual = x == z; // false
// let isStrictEqual = x === z; // false
// let logicTest = (isEqual || isStrictEqual) && !(y > 10); // false
// let result = logicTest ? ++x : --y; // 4

// console.log(`x: ${x}`);
// console.log(`y: ${y}`);
// console.log(`z: ${z}`);
// console.log(`isEqual: ${isEqual}`);
// console.log(`isStrictEqual: ${isStrictEqual}`);
// console.log(`logicTest: ${logicTest}`);
// console.log(`result: ${result}`);
// console.log(`type of z: ${typeof z}`);

// ===============================================================
//  11. What will be the output of the following JavaScript code?
// ===============================================================

// let a = 6;
// let b = 3;
// let c = "6";

// a += b << 1; // 12
// let d = a & b; // 0
// let e = a | b; // 15
// let f = a ^ b; // (XOR) 15
// let g = ~a; // -13

// let check = (a == c) && (d < e) || !(f === e); // false 
// let result = check ? typeof g: --b; // 2

// console.log(`a: ${a}`);
// console.log(`b: ${b}`);
// console.log(`c: ${c}`);
// console.log(`d (a & b): ${d}`);
// console.log(`e (a | b): ${e}`);
// console.log(`f (a ^ b): ${f}`);
// console.log(`g (~a): ${g}`);
// console.log(`check: ${check}`);
// console.log(`result: ${result}`);

