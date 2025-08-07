// =================================================================================
//   1. Create a paragraph with text “mai tumse pyar nahi karta hun” and
//      add background color to black and font color to yellow using javascript.
// =================================================================================

// let p = document.createElement("p");
// p.textContent = "mai tumse pyar nahi karta hun.😋";
// p.style.backgroundColor = "black";
// p.style.color = "yellow";
// document.body.append(p);

// =================================================================================
//  2. Insert a button with text “click me” as the first element inside the
//     paragraph created in 1st question.
// =================================================================================

// let button = document.createElement("button");
// button.textContent = "click me!";
// p.prepend(button);

// ========================================================================
//  3. Create a <div> tag in html and give it a class & some styling. 
//     Now create a new class in css and try to append this class to the 
//     <div> element.
// ========================================================================

let div = document.querySelector(".box");
let oldClass = div.getAttribute("class");
div.setAttribute("class", `${oldClass} new-box`);