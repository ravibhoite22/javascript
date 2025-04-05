console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

let promise1 = new Promise((res, rej) => {
  res(4);
});

promise1.then((res) => {
  console.log(res);
});
console.log(5);

//output : 1,3,5,4,2