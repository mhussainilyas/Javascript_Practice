// ========================================
// 44) 🚀 Guess the Output:
//        let date = new Date(0);
//        console.log(date.toString()); 🎯
// ========================================

// let date = new Date(0);
// console.log(date.toString()); // Epoch Time

// ================================================================================
// 45) 🚀 Validate that a user's selected date range is no longer than 30 days. 🎯
// ================================================================================

// let fixDate = new Date("2025-08-14");
// let userDate = new Date("2025-09-19");

// let timeDiff = userDate.getTime() - fixDate.getTime();
// let days = timeDiff / 1000 / 60 / 60 / 24;

// if (days > 30) {
//   console.log("Date expired! 🥺");
// } else {
//   console.log("Welcome! 😊");
// }

// ===============================================================
// 46) 🚀 Calculate difference between two dates in the format of
//        “_ years _ months _ days _ hours _ minutes _ sec”. 🎯
// ===============================================================

// let startingDate = "1997-09-27T00:00:00Z";
// let endingDate = "2000-03-01T00:00:00Z";

// function getTimeDifference(start, end) {
//   let startDate = new Date(start);
//   let endDate = new Date(end);

//   let timeDiff = (endDate.getTime() - startDate.getTime()) / 1000;

//   let years = Math.floor(timeDiff / (60 * 60 * 24 * 365));
//   timeDiff = timeDiff % (60 * 60 * 24 * 365);

//   let months = Math.floor(timeDiff / (60 * 60 * 24 * 30));
//   timeDiff = timeDiff % (60 * 60 * 24 * 30);

//   let days = Math.floor(timeDiff / (60 * 60 * 24));
//   timeDiff = timeDiff % (60 * 60 * 24);

//   let hours = Math.floor(timeDiff / (60 * 60));
//   timeDiff = timeDiff % (60 * 60);

//   let minutes = Math.floor(timeDiff / 60);

//   let seconds = Math.floor(timeDiff % 60);

//   return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
// }

// let timeDiff = getTimeDifference(startingDate, endingDate);
// console.log(timeDiff);

// ==========================
// 👉 USING LIBRARAY (luxon)
// ==========================

// let luxon = require("luxon");
// let { DateTime } = luxon;

// let startingDate = "2005-04-17T00:00:00.000Z";
// let endingDate = "2009-08-04T00:00:00.000Z";

// function getTimeDifference(start, end) {
//   let startDate = DateTime.fromISO(start);
//   let endDate = DateTime.fromISO(end);

//   let timeDiff = endDate.diff(startDate, [
//     "years",
//     "months",
//     "days",
//     "hours",
//     "minutes",
//     "seconds",
//     "milliseconds",
//   ]);

//   let { years, months, days, hours, minutes, seconds, milliseconds } = timeDiff;

//   return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ${milliseconds} milliseconds`;
// }

// let dateDifferece = getTimeDifference(startingDate, endingDate);
// console.log(dateDifferece);

// =================================================
// 47) 🚀 Add or subtract n days from a given date.
//        (E.g., Add 7 days to "2025-05-01") 🎯
// =================================================

// let days = 7;
// let date = new Date("2005-04-27T00:00:00.000Z");

// let newDate = addDaysInDate(date, days);
// console.log(newDate);

// function addDaysInDate(date, days) {
//   let daysInMillisec = days * 24 * 60 * 60 * 1000;
//   let daysAddedDate = date.getTime() + daysInMillisec;
//   return new Date(daysAddedDate);
// }

// =============================================================
// 48) 🚀 Calculate the user's age from their date of birth. 🎯
// =============================================================

// let currentDate = new Date();
// let dateOfBirth = new Date("2005-04-27");

// let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
// let months = currentDate.getMonth() - dateOfBirth.getMonth();
// let days = currentDate.getDate() - dateOfBirth.getDate();

// if (months < 0 || (months === 0 && days < 0)) {
//   years--;
// }

// console.log(`${years.toString()} years old.`);

// =========================================================================
// 49) 🚀 Write a formatDate(dateStr) function that returns a user-friendly
//        format like Jan 1, 2025. Why is it better to centralize this logic
//        in a utility? 🎯
// =========================================================================

let date = "2005-04-27T12:00:00.000Z";

let formattedDate = formatDate(date);
console.log(formattedDate);

function formatDate(d) {
  let date = new Date(d);
  return date.toLocaleDateString("en-PK", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ====================================================================
// 50) 🚀 What are the different options and parameters available in 
//        toLocaleString and toLocaleDateString etc to format date. 🎯
// ====================================================================