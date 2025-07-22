// ==========================================================
//    1. Write a regular function that takes a string and,
//       returns it with the first letter capitalized.
// ==========================================================

// const capitalizeFirstLetter = (str) => {
//   console.log(str.charAt(0).toUpperCase() + str.slice(1));
// };

// capitalizeFirstLetter("hussain");

// ========================================================================================
//    2. Show an alert message that says “Please login” after 5 seconds on your website.
// ========================================================================================

// setTimeout(() => {
//   alert("Please Login 😊");
// }, 5000);

// =================================================================
//    3. Make an arrow function that takes a price and a discount,
//       and returns the price after discount.
// =================================================================

// const dicountedPrice = (price, discount) => {
//   let finalPrice = price - price * (discount / 100);
//   return finalPrice;
// };

// let finalPrice1 = dicountedPrice(1550, 50);
// let finalPrice2 = dicountedPrice(50, 50);
// console.log(finalPrice1);
// console.log(finalPrice2);

// ==================================================================
//    4. Create a function that builds a username from a full name.
// ==================================================================

// function generateUsername(fullName) {
//   let username = "@" + fullName.trim().replaceAll(" ", "") + fullName.length;
//   return username;
// }

// let name = prompt("Enter Your name: ");
// let username = generateUsername(name);
// console.log(username);

// ===========================================================================================
//    5. Write a function that takes a traffic light color and gives the correct instruction,
//       e.g. “go” for green,
//       “stop” for red,
//       “caution” for yellow,
//       and “invalid color” for anything else.
// ===========================================================================================

function generateInstructions(color) {
  if (color === "red") {
    console.log("Stop!");
  } else if (color === "yellow") {
    console.log("Caution!");
  } else if (color === "green") {
    console.log("Go...");
  } else {
    console.log("Invalid Color");
  }
}

generateInstructions("red");
generateInstructions("yellow");
generateInstructions("green");
generateInstructions("pink");
