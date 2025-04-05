console.log(add(10, 20)); // 30
console.log(sub(25, 10)); // error : arrow function does not hoisted

function add(a, b) {
  return a + b;
}

var sub = (a, b) => a - b;

console.log(mul(3, 5));

var mul = function (a, b) {
  return a * b;
};
