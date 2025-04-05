// e.g Below = elbow     same letters use for both the words called anagram
// listen = silent

let str1 = "Below";
let str2 = "Elbow";

let pstr1 = str1.toLowerCase().split("").sort().join("");
let pstr2 = str2.toLowerCase().split("").sort().join("");

console.log(pstr1);
console.log(pstr2);

if (pstr1 == pstr2) {
  console.log("anagram");
} else {
  console.log("not anagram");
}
