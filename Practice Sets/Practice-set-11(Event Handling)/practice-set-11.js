// ===========================================================================================
// Build an increment–decrement counter similar to what you see in the shopping cart on Amazon
// ===========================================================================================

// let incBtn = document.querySelector(".inc-btn");
// let decBtn = document.querySelector(".dec-btn");
// let countValue = document.querySelector(".count-value");

// incBtn.addEventListener("click", () => {
//   let quantity = countValue.innerText;
//   countValue.innerText = Number(quantity) + 1;
// });

// decBtn.addEventListener("click", () => {
//   let quantity = countValue.innerText;
//   if (quantity <= 1) {
//     return;
//   }
//   countValue.innerText = Number(quantity) - 1;
// });

// ===============================================================================
//  2. Create a simple form and display the submitted details on the webpage.
//     Ensure that if any field is left empty, the form should not be submitted.
// ===============================================================================

let form = document.querySelector("form");
let nameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameInput.value || !emailInput.value) {
    console.error("missing arguments!");
    return;
  }
  let div = document.createElement("div");
  div.innerHTML = `<p>${nameInput.value}</p><p>${emailInput.value}</p>`;
  document.body.append(div);
});
