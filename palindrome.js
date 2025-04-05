//e.g madam, tenet, pop etc.

let word = "madaM";
//let word = "ravi";

let letters = word.split("");

let revLetters = letters.reverse();

if (word.toLowerCase() === revLetters.join("").toLowerCase()) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

let originNum = 12321;
let number = 12321;
let rem = 0;
let revNum = 0;

while (number > 0) {
  rem = number % 10;
  revNum = revNum * 10 + rem;
  number = Math.floor(number / 10);
}

console.log(revNum);

if (originNum == revNum) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
