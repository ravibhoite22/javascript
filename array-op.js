let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.reverse();
let arr3 = [...arr1].reverse();

console.log(arr1);
console.log(arr2);
console.log(arr3);

let word = "ravi";

word.toUpperCase();
arr1.sort();
let word1 = word.toUpperCase();

console.log(word);
console.log(arr1);
console.log(word1);

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 5];

// compare two array
if (a.every((el, index) => el === b[index])) {
  console.log("equal");
} else {
  console.log("not equal");
}

//sort array
let alpha = ["t", "a", "c", "z"];
let ages = [22, 35, 15, 2, 6];
let students = [
  {
    name: "ravi",
    age: 12,
  },
  {
    name: "shreeraj",
    age: 6,
  },
  {
    name: "bhoite",
    age: 60,
  },
  {
    name: "poonam",
    age: 36,
  },
];

console.log(alpha.sort()); // working with letter
console.log(ages.sort()); // not working with numbers

console.log(ages.sort((a, b) => a - b));

console.log(students.sort((a, b) => a.age - b.age));
console.log(
  students.sort((a, b) => (a.name == b.name ? 0 : a.name > b.name ? 1 : -1))
);

//array filter
console.log(ages.filter((el) => el % 2 === 0));
console.log(students.filter((stud) => stud.name.startsWith("b")));
console.log(students.filter((stud) => stud.age > 20));

// array min max element

console.log(Math.min(...ages));
console.log(Math.max(...ages));

let min = ages[0];
let max = ages[0];

for (let age of ages) {
  if (age > max) {
    max = age;
  }
  if (age < min) {
    min = age;
  }
}

console.log(min);
console.log(max);

let maxAge = students.reduce((acc, curr) => {
  return acc.age > curr.age ? acc : curr;
});

console.log(maxAge);

// array unique element

let fruits = [
  "apple",
  "orange",
  "banana",
  "mango",
  "orange",
  "banana",
  "cherry",
];

let uniqueFruits = [];

for (let fruit of fruits) {
  if (!uniqueFruits.includes(fruit)) {
    uniqueFruits.push(fruit);
  }
}
console.log(uniqueFruits);

console.log([...new Set(fruits)]); // using sets

// empty array
arr1 = []; // does not work with const & reference copy of array
arr1.length = 0;
arr1.splice(0, arr1.length);

// last element of array

console.log(fruits[fruits.length - 1]);
console.log(fruits.slice(-1)[0]);
console.log(fruits.pop());
console.log(fruits.reverse()[0]);

