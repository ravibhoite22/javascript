let word = "Welcome Ravi Kisan Bhoite to javascript";

let vowels = ["a", "e", "i", "o", "u"];

let tempArr = [];

for (let vo of vowels) {
  let count = 0;
  for (let char of word) {
    if (char.toLowerCase() == vo) {
      count++;
    }
  }
  tempArr[vo] = count;
}

console.log(tempArr);