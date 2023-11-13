//push : add object to array
let myArr = [1,2,3,4,5];
myArr.push(6);
console.log("pushed ",myArr);
//pop : remove the object from array
myArr.pop();
console.log("pop ",myArr);
//shift : remove 1st element in array
myArr.shift()
console.log("shift ",myArr);
//unshift : add one or more element to beginning of the array
myArr.unshift(0,1);
console.log("unshift ",myArr);
//forEach
myArr.forEach((value,index)=>{
    console.log(value,index);
})

//Array destructure
const array = [1, 2, 3, 4, 5];
//method 1
const [oneElm, twoElm, threeElm, fourElm, FiveElm] = array;

console.log("original array ", array);
console.log("destructure array ");
console.log("", oneElm);
console.log("", twoElm);
console.log("", FiveElm);

//method 2
const { 0: oneObj, 1: twoObj, 2: threeObj } = array;
console.log("destructure array object");
console.log("", oneObj);
console.log("", twoObj);
console.log("", threeObj);

//The flat() method concatenates sub-array elements
const arrayWithArr = [1,2,3,[4,[6,5]]];
console.log(arrayWithArr.flat(2));