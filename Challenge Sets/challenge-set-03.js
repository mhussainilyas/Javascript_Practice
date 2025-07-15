// ======================
//    Challenge # 01
// ======================
// Print all even numbers from 0 to 100.

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ======================
//    Challenge # 02
// ======================
// Calculate how many vowels and consonants are there in a given string using for-of loop
let vowelCount = 0;
let consonantCount = 0;
let str = "A Quick Brown Fox Jumps Over The Lazy Dog.";
let vowels = "aeiouAEIOU";
console.log(str.length);
for (let char of str) {
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (char === " ") {
    continue;
  } else {
    consonantCount++;
  }
}
console.log(`Total vowel letters: ${vowelCount}`);
console.log(`Total consnant letters: ${consonantCount}`);
