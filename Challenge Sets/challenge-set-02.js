// ==================
//   Challenge # 01
// ==================
// Scenario: A website gives discounts based on the total shopping cart amount.
// Question:
// Write a program where:
// If the cart value is less than $50, no discount is applied.
// If the cart value is between $50 and $100, apply a 10% discount.
// If the cart value is more than $100, apply a 20% discount.
// Display the final cart total after the discount.

let cartAmount = 88;
let finalCartValue;
if (cartAmount < 50) {
  finalCartValue = cartAmount;
  console.log("no discount is applied");
} else if (cartAmount >= 50 && cartAmount <= 100) {
  finalCartValue = cartAmount * (10 / 100);
  console.log("10% discount is applied");
} else if (cartAmount > 100) {
  finalCartValue = cartAmount * (20 / 100);
  console.log("20% discount is applied");
}
console.log(`The final cart value is $${finalCartValue.toFixed(2)}.`);

// ==================
//   Challenge # 02
// ==================
// Scenario: On a video-streaming platform, verify user access to premium content.
// Question:
// Write a program to check if a user has a valid subscription. If the user has a subscription, further check if the subscription is "premium" or "standard".
// If "premium", display "Access to all content".
// If "standard", display "Access to limited content".
// If the user doesn’t have a subscription, display "Please subscribe to access content."

let userSubscription = "";
if (userSubscription) {
  if (userSubscription === "premium") {
    console.log("Access to all content");
  } else if (userSubscription === "standard") {
    console.log("Access to limited content");
  } else {
    console.log("Unknown subscription type");
  }
} else {
  console.log("Please subscribe to access content.");
}
