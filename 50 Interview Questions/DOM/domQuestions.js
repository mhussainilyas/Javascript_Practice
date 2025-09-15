// ==================================================================
// 31) 🚀 How can you update the DOM based on user input in real-time
//        (e.g., live preview of a form)? 🎯
// ==================================================================

// let inputField = document.querySelector("input");

// function handleChange(e) {
//   console.log(e.target.value);
// }

// inputField.addEventListener("input", handleChange);

// =============================================================
// 32) 🚀 How would you handle form validation in real time and
//        show error messages dynamically? 🎯
// =============================================================

// let nameInput = document.querySelector("#name");
// let emailInput = document.querySelector("#email");
// let passwordInput = document.querySelector("#password");
// let nameErrorSpan = document.querySelector("#name-error");
// let emailErrorSpan = document.querySelector("#email-error");
// let passwordErrorSpan = document.querySelector("#password-error");

// const nameRegex = /^[A-Za-z\s]{2,}$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// function handleNameInputField(e) {
//   if (!nameRegex.test(e.target.value)) {
//     nameErrorSpan.textContent = "❌ Invalid name";
//   } else {
//     nameErrorSpan.textContent = "";
//   }
// }

// function handleEmailInputField(e) {
//   if (!emailRegex.test(e.target.value)) {
//     emailErrorSpan.textContent = "❌ Invalid email format";
//   } else {
//     emailErrorSpan.textContent = "";
//   }
// }

// function handlePasswordInputField(e) {
//   if (!passwordRegex.test(e.target.value)) {
//     passwordErrorSpan.textContent = "❌ Invalid password";
//   } else {
//     passwordErrorSpan.textContent = "";
//   }
// }

// nameInput.addEventListener("input", handleNameInputField);
// emailInput.addEventListener("input", handleEmailInputField);
// passwordInput.addEventListener("input", handlePasswordInputField);

// ===============================================================================
// 33) 🚀 How do you find the closest ancestor element that matches a selector? 🎯
// ===============================================================================

// let btn = document.querySelector(".grand-child > .btn");

// function getClosestAncestor(e) {
//   let target = e.target;
//   console.log(target.closest(".parent"));
// }

// btn.addEventListener("click", getClosestAncestor);

// =======================================================================
// 34) 🚀 How would you toggle a class on an element when another element
//        is clicked (e.g., show/hide sidebar)? 🎯
// =======================================================================

// let toggleBtn = document.querySelector("#toggle-sidebar-btn");
// let sidebar = document.querySelector("#sidebar");

// function handleToggleSidebar() {
//   sidebar.classList.toggle("show");
// }

// toggleBtn.addEventListener("click", handleToggleSidebar);

// ============================================
// 35)🚀 Create a Show/Hide Password Toggle 🎯
// ============================================

// let passwordInput = document.querySelector("#password");
// let passwordShowIcon = document.querySelector("#password-show-icon > i");

// function handleShowPassword() {
//   let passwordType = passwordInput.type;
//   passwordInput.type = passwordType === "password" ? "text" : "password";
//   passwordShowIcon.classList.toggle("fa-eye-slash");
//   passwordShowIcon.classList.toggle("fa-eye");
// }

// passwordShowIcon.addEventListener("click", handleShowPassword);

// ============================================================================
// 36) 🚀 Create a sticky Header on scroll. The Header become fixed to the
//        top after scrolling down (Key concept: scroll event, window.scrollY,
//        classList.add/remove) 🎯
// ============================================================================

// let header = document.querySelector("header");

// window.addEventListener("scroll", (e) => {
//   if (window.scrollY >= 230) {
//     header.classList.add("sticky-navbar");
//   } else {
//     header.classList.remove("sticky-navbar");
//   }
// });