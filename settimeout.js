console.log(1);
setTimeout(()=>{
    console.log(2);
},2000);

console.log(3);
setTimeout(()=>{
    console.log(4);
},0);

console.log(5);
setTimeout(()=>{
    console.log(6);
});

console.log(7);
setTimeout(()=>{
    console.log(8);
},1000);

console.log(9);

//output : 1,3,5,7,9,4,6,8,2