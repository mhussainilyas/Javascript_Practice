// ===============================================================
//  1. Create a simple website with theme changing functionality.
// ===============================================================

// let btn = document.querySelector("button");
// let theme = "light";
// btn.addEventListener("click", () => {
//   if (theme === "light") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     theme = "dark";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     theme = "light";
//   }
// });

// ================================================
//  2. Solve first question by changing CSS class.
// ================================================

// let btn = document.querySelector("button");
// let body = document.body;

// btn.addEventListener("click", () => {
//   if (body.id === "light") {
//     body.id = "dark";
//   } else {
//     body.id = "light";
//   }
// });

// ==================================================
//  3. Solve the first question by toggle CSS class.
// ==================================================

let btn = document.querySelector("button");
let body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
