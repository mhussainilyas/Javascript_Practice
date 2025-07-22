// ============================================
//    1. Calculate sum of first ‘n’ numbers.
// ============================================

// let sum = 0;
// let lastNum = Number(prompt("Enter a last number: "));
// for (let i = 1; i <= lastNum; i++) {
//   sum += i;
// }
// console.log(sum);

// =====================================================
//    2. Calculate the sum of numbers from ‘m’ to ‘n’.
// =====================================================

// let sum = 0;
// let firstNum = Number(prompt("Enter first number: "));
// let lastNum = Number(prompt("Enter last number: "));
// for (let i = firstNum; i <= lastNum; i++) {
//   sum += i;
// }
// console.log(sum);

// ============================================
//    3. Print all odd numbers from 0 to ‘n’.
// ============================================

// let num = Number(prompt("Enter a number: "));
// for (let i = 1; i <= num; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// =====================================================
//    4. Create a “Number Knock” game.
//       Ask the user to keep guessing the number,
//       until the user enters correct guess.
// =====================================================

// let num;
// let guess = 6;

// while (num !== guess) {
//   num = Number(prompt("Guess the number 🤗: "));
//   if (isNaN(num)) {
//     alert("Number is invalid, please try again!");
//   } else if (num < guess) {
//     if (num < guess * -10) {
//       alert("Number is too much low, please try again!");
//     } else {
//       alert("Number is low, please try again!");
//     }
//   } else if (num > guess) {
//     if (num > guess * 10) {
//       alert("Number is too much high, please try again!");
//     } else {
//       alert("Number is high, please try again!");
//     }
//   } else {
//     alert("Congratulations 🤩! Your guess is correct.");
//   }
// };

// ================================================
//    5. Simple Password Checker (Fixed Attempts)
// ================================================

// let attempt = 0;
// let correctPass = "hussain07";
// let userPass;

// while (correctPass !== userPass && attempt < 3) {
//   userPass = prompt("Please enter a password: ");
//   attempt++;
//   if (userPass === correctPass) {
//     alert("Your password is correct ✔");
//   } else if (attempt >= 3)  {
//     alert("Your attempt is over!");
//   } else {
//     alert("Your password is Incorrect ❌, please try again!");
//   }
// }

// ======================================================
//    6. Create a program to find the factorial of ‘n’.
// ======================================================

// let num = Number(prompt("Enter a number: "));
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(`factorial of ${num} is: ${fact}`);

// ===============================================================
//    7. Print the following pattern. (build it for nth numbers)
//       1
//       1 2
//       1 2 3
//       1 2 3 4
//       1 2 3 4 5
// ===============================================================

// let num = 5;
// for(let i = 1; i <= num; i++) {
//     let numStr = "";
//     for(let j = 1; j <= i; j++) {
//         numStr += j + " ";
//     }
//     console.log(numStr);
// }

// ==================================
//    8. Text based advanture game
// ==================================

let playAgain = "yes";

while (playAgain === "yes") {
  alert("You wake up in the dark forest!");

  let userChoice = prompt("Do you want to go 'left' or 'right'?");

  if (userChoice.toLowerCase() === "left") {
    alert("You see something shiny in mud!");
    userChoice = prompt("Do you want to pick it up? (yes or no)");
    if (userChoice.toLowerCase() === "yes") {
      alert("It is a magical stone! You are teleported tp safety, you win!");
    } else {
      alert("You sink slowly into the mud! (Game over)");
    }
  } else {
    alert("You find a cave!");
    userChoice = prompt("Do you want to enter the cave? (yes or no)");
    if (userChoice.toLowerCase() === "yes") {
      alert("You barely escaped!");
    } else {
      alert("A peaceful night under the stars!");
    }
  }

  userChoice = prompt("Do you want to play again? (yes or no)");
  if (userChoice.toLowerCase() === "no") {
    playAgain = "no";
    alert("Thanks for playing 😊");
  }
}
