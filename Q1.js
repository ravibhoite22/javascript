// Wrt code input arr = [[1,2,3] , [4,5] , [2,2,3,4,[1,2,[3]]] , [0, [4,3]] , [2,2,3,4,3]] & o/p = sum of all array items

function sumNestedArray(arr) {
    let total = 0;
    for (let item of arr) {
        if (Array.isArray(item)) {
            total += sumNestedArray(item);  // Recursive call for nested arrays
        } else {
            total += item;  // Add the element to the total if it's not an array
        }
    }
    return total;
}

// Given array
const arr = [[1, 2, 3], [4, 5], [2, 2, 3, 4, [1, 2, [3]]], [0, [4, 3]], [2, 2, 3, 4, 3]];

// Calculate and print the sum
const result = sumNestedArray(arr);
console.log("Sum of all array items:", result);