let word = "Welcome Ravi Kisan Bhoite to javascript";

// replace all 'a' with 'A'

console.log(word.replaceAll("a", "A"));
console.log(word.replace(new RegExp("a", "g"), "A"));

let tempArr = [];

for (let char of word.split("")) {
  if (char == "a") {
    tempArr.push("A");
  } else {
    tempArr.push(char);
  }
}

console.log(tempArr.join(""));
