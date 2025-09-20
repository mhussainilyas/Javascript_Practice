let user = {
  name: "Hussain",
  email: "hussain@gmail.com",
  phone: "0302133320",
};

let user1 = {
  name: "Suleman",
  email: "suleman@gmail.com",
  phone: "03024287068",
};

// ==============
// 👉 1st Method
// ==============

// function sendEmail(user) {
//   console.log("Email send to:", user.email);
// }

// function sendSMS(user) {
//   console.log("SMS send to:", user.phone);
// }

// function sendTo(user) {
//   console.log("Send to:", user.name);
// }

// sendTo(user);
// sendEmail(user);
// sendSMS(user);

// ==============
// 👉 2nd Method
// ==============

// function sendMessage(msg, sendTo) {
//   console.log(`${msg}: ${sendTo}`);
// }

// sendMessage("Send to", user.name);
// sendMessage("Email send to", user.email);
// sendMessage("SMS send to", user.phone);

// ==============
// 👉 3rd Method
// ==============

// 🎲 Utility Functions

function sendEmail(user) {
  console.log("Email send to:", user.email);
}

function sendSMS(user) {
  console.log("SMS send to:", user.phone);
}

function sendTo(user) {
  console.log("Send to:", user.name);
}

// 🎲 Higher Order Function

function processUser(user, fn) {
  console.log("Since you are authorized 🚀");
  fn(user);
}

// 🎲 Calling Higher Order Function

processUser(user, sendTo);
processUser(user, sendEmail);
processUser(user, sendSMS);
processUser(user1, sendTo);
processUser(user1, sendEmail);
processUser(user1, sendSMS);
