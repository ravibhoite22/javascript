let word = "Welcome Ravi Kisan Bhoite to javascript";

let words = word.split(" ");

let lastWord = words.pop();

lastWord = lastWord.toUpperCase();

console.log(words.join(" ") + " " + lastWord);
