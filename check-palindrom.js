function isPalindrome(inputStr) {
    var strArr = inputStr.split("");
    revStr = strArr.reverse();
    revStr = revStr.join("");
    if (revStr == inputStr) {
        console.log("palindrome");
    } else {
        console.log("not palindrome");
    }
}
isPalindrome("civic");