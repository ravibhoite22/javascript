const a = { val: 10 };
Object.freeze(a);
a.val = 20;
console.log(a.val);
