// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // const arr = str.split("");
  // arr.reverse();
  // return arr.join("");
  return str.split("").reverse().join("");
}

module.exports = reverse;

// 1st solution >>>

// function reverse(str) {
//   // const arr = str.split("");
//   // arr.reverse();
//   // return arr.join("");
//   return str.split("").reverse().join("");
// }

// *********************
// 2nd solution >>>
// using for of loop.

// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// **********************
// 3rd solution >>>
// using reduce helper.

// function reverse(str) {
//   return str.split("").reduce((rev, char) => {
//     return char + rev;
//   }, "");
// }
