
var arr = [1,2,3,4,5,6];

//map
var newMapArr = arr.map(function(arrObject){
    return arrObject *2;
})
console.log(newMapArr);

//filter
var newFilterArr = arr.filter(function(arrObject){
    return arrObject > 3;
})
console.log(newFilterArr);

//reduce
var newReduce = arr.reduce(function(sum,arrObject){
    return sum = sum + arrObject;
})
console.log(newReduce);