// =======================================================
// Q.1- Give choice to the user to select theme color,
//      and set the selected theme color and console it.
// =======================================================

// let color;
// let isValid = true;
// let theme = prompt("Choose your fav theme (light, dark, pink, green): ");
// if (theme === "light") {
//   color = "white";
// } else if (theme === "dark") {
//   color = "black";
// } else if (theme === "pink") {
//   color = "pink";
// } else if (theme === "green") {
//   color = "green";
// } else {
//   isValid = false;
//   console.log("invalid theme!");
// }

// if (isValid) {
//   console.log(
//     `Your selected theme is ${theme} and color is ${color} respectively.`
//   );
// }

// ============================================================================
//    Q.2- Find the smallest of three numbers. Numbers are given by the user.
// ============================================================================

// let num1 = Number(prompt("Enter 1st number: "));
// let num2 = Number(prompt("Enter 2nd number: "));
// let num3 = Number(prompt("Enter 3rd number: "));
// let snum = (num1 < num2) ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
// console.log(`The smallest number amoung ${num1}, ${num2} and ${num3} is: ${snum}`);

// ==============================================================
//    Q.3- Write a program to manage Role-Based Access Control
//         Given a user role ("admin", "editor", "viewer"):
//         Admin: full access
//         Editor: edit access
//         Viewer: read-only
//         Any other: no access
//         Use switch.
// ==============================================================

// let userRole = "viewer";
// switch (userRole) {
//   case "admin":
//     console.log("Full access");
//     break;
//   case "editor":
//     console.log("Edit access");
//     break;
//   case "viewer":
//     console.log("Read only");
//     break;
//   default:
//     console.log("No access");
// }

// ==========================================================
//    Q.4- Check if Number is Divisible by 3 or 5 or Both.
//         Print “Fizz” for multiples of 3,
//         “Buzz” for multiples of 5,
//         “FizzBuzz” for both.
// ==========================================================

// let num = 675;
// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (num % 3 === 0) {
//   console.log("Fizz");
// } else if (num % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(`${num} is not divisible by 3, 5, or both!`);
// }

// ============================================================
//    Q.5- Create a simple calculator.
//         Take two numbers and an operator (+, -, *, /) and
//         calculate the result using switch.
// ============================================================

// let num1 = 12;
// let num2 = 32;
// let operator = "+";
// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Invalid operation");
// }

// =============================================================================================
//    Q.6- Create a simple ATM program.
//         User can choose:
//         Check Balance
//         Deposit
//         Withdraw
//         Exit
//         Note that in case of “Deposit” if deposit amount is less than 1Rs produce error
//         otherwise deposit the amount and show the message with a new balance.
//         And in case of “Withdraw” if withdraw amount is greater than balanc or less than 1Rs
//         then produce error otherwise withdraw amount and show remaining balance.
// =============================================================================================

let amount = 1000;
let choice = Number(
  prompt(
    "Enter your choice:\n1. Check Balance\n2. Deposit amount\n3. withdraw amount\n4. Exit"
  )
);
if (choice === 1) {
  console.log(`Your current balance is: ${amount}`);
} else if (choice === 2) {
  let depositAmount = Number(prompt("Enter amount to deposit: "));
  if (depositAmount > 0) {
    amount += depositAmount;
    console.log(
      `You deposit ${depositAmount} and now your balance is ${amount}`
    );
  } else {
    console.log(`Please enter a valid amount!`);
  }
} else if (choice === 3) {
  let withdrawAmount = Number(prompt("Enter amount to withdraw: "));
  if (withdrawAmount > 0 && withdrawAmount < amount) {
    amount -= withdrawAmount;
    console.log(
      `You withdraw ${withdrawAmount} and now current balance is ${amount}`
    );
  } else {
    console.log("please enter a valid amount");
  }
} else if (choice === 4) {
  console.log("Thanks for comming 😊");
} else {
  console.log("please enter a valid choice");
}
