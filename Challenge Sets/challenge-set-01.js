// =====================
//    Challenge # 01
// =====================
// on a shopping website, calculate the total cost of a product when given
// price per item is 150
// quantity is 3
// also, calculate 10% discount on total cost
// and display discounted price

let pricePerItem = 150;
let quantity = 3;
let totatCost = pricePerItem * 3;
let discount = totatCost * (10 / 100);
let discountedPrice = totatCost - discount;
console.log("price per item: ", pricePerItem);
console.log("quantity: ", quantity);
console.log("total cost: ", totatCost);
console.log("discount (10%): ", discount);
console.log("discounted price: ", discountedPrice);

// =====================
//    Challenge # 02
// =====================
// On a booking website, check if the user's age is valid for booking.
// age should be atleast 18
// write a condition to check and display a message:
// "Elligible for booking" if the user is 18 or older
// "Not elligible for booking" otherwise.

let age = 18;
let message = age >= 18 ? "Elligible for booking" : "Not elligible for booking";
console.log(message);

// =====================
//    Challenge # 03
// =====================
// on a login page, verify the user's credential
// check if the user name is not empty AND password is not empty.
// if booth are not empty display message: "Login successful"
// if either is empty, display an error message: "Both fields are required"

let userName = "";
let password = "";
let result = (userName && password) ? "Login successful" : "Both fields are required";
console.log(result);