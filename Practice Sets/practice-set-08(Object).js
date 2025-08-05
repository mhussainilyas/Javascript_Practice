// ============================================================================
//   1. Create a person object with properties: name, age, and city. Then
//     a) Log each property as: value of “name” property is “Hussain” using loop.
//     b) Add a new property called email to the person object.
//     c) Delete “city” property from person object.
// ============================================================================

// const person = {
//   name: "Hussain",
//   age: 20,
//   city: "Lahore",
// };

// 👉 (a)
// for (let key in person) {
//   console.log(`value of ${key} property is ${person[key]}`);
// }

// 👉 (b)
// person.email = "hussain@gmail.com";
// console.log(person);

// 👉 (c)
// delete person.city;
// console.log(person);

// =========================================================================================
//   2. Create a function that takes an object with firstName, middleName, lastName
//      properties and returns the full name.
// =========================================================================================

// let obj = {
//   firstName: "Muhammad",
//   middleName: "Hussain",
//   lastName: "Ilyas",
// };

// const getFullName = (obj) => {
//   let { firstName, middleName, lastName } = obj;
//   return `${firstName} ${middleName} ${lastName}`;
// };

// let fullName = getFullName(obj);
// console.log(fullName);

// ===========================================================================================
//   3. Write a function that takes object and returns the number of properties in an object.
// ===========================================================================================

// let obj = {
//   name: "Hussain",
//   age: 20,
//   city: "Lahore",
//   isMarried: false,
// };

// function getLengthOfKeysInObject(obj) {
//   let arr = Object.keys(obj);
//   let lengthOfKeys = arr.length;
//   return lengthOfKeys;
// }

// let length = getLengthOfKeysInObject(obj);
// console.log(length);

// ===========================================================================================
//   4. Write a function that returns an array of names of users who have the role “admin”.
//      const users = [
//        { name: "Alice", role: "admin" },
//        { name: "Bob", role: "user" },
//        { name: "Charlie", role: "admin" }
//      ];
// ===========================================================================================

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
// ];

// function arrayOfAdminUsers(arr, role) {
//   let filteredArr = arr.filter((item) => {
//     return item.role === role;
//   });
//   let adminUsers = filteredArr.map((item) => {
//     return item.name;
//   });
//   return adminUsers;
// }

// let arr = arrayOfAdminUsers(users, "admin");
// console.log(arr);

// ===========================================================================================
//   5. Write a function searchProducts(products, keyword) that returns an array of products
//      whose name includes the given keyword (case-insensitive).
//      const products = [
//        { id: 1, name: "iPhone 14" },
//        { id: 2, name: "Samsung Galaxy" },
//        { id: 3, name: "Google Pixel" }
//      ];
// ===========================================================================================

// const products = [
//   { id: 1, name: "iPhone 14" },
//   { id: 2, name: "Samsung Galaxy" },
//   { id: 3, name: "Google Pixel 4" },
// ];

// const searchProduct = (arr, searchKeyword) => {
//   return arr.filter((item) => {
//     return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
//   });
// };

// let searchedProduct = searchProduct(products, "i");
// console.log(searchedProduct);

// =============================================================================================
//  6. Write a function groupByPost(comment) that returns an object grouping comments by postId
// =============================================================================================

// const comments = [
//   { postId: 1, text: "Great post!" },
//   { postId: 2, text: "Thanks!" },
//   { postId: 1, text: "Very helpful" },
// ];

// function groupByPost(comments) {
//   const obj = {};
//   comments.forEach((item) => {
//     let { postId, text } = item;
//     if (obj.hasOwnProperty(postId)) {
//       obj[postId].push(text);
//     } else {
//       obj[postId] = [text];
//     }
//   });
//   return obj;
// }

// let commentObj = groupByPost(comments);
// console.log(commentObj);

// =======================================================================================
//  7. Write a function buildQuery(params) that returns a string representing URL query
//     parameters from an object.
// =======================================================================================

const params = {
  search: "laptop",
  page: 2,
  sort: "asc",
};

function createUrl(params) {
  let strUrl = "";
  for (let key in params) {
    strUrl += `${key}=${params[key]}&`;
  }
  //   return strUrl;
  let finalUrl = strUrl.slice(0, strUrl.length - 1);
  return finalUrl;
}

const url = createUrl(params);
console.log(url);
