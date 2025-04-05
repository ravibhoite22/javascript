var a = 10;

function fn() {
  var a = 20;
  console.log(a);
}

fn();

console.log(a);

// output : 20,10

var arr = ["a", "b", "c", "d"];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000);
}

//output using var : undefined, undefined, undefined, undefined,

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000);
}

//output using let : a,b,c,d