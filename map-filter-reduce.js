var arr = [1,2,3,4,5]

//map
var newMapArr = arr.map(function(arrObj){
    return arrObj * 2;
})
console.log(newMapArr);

//filter
var newFilterArr = arr.filter(function(arrObj){
    return arrObj > 3;
});
console.log(newFilterArr);

//reduce
var newReduce = arr.reduce(function(sum,arrObj){
    return sum = sum + arrObj;
});
console.log(newReduce);