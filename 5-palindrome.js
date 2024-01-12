var isPalindrome = function(x) {
    
    return x.toString().split("").reverse().join("") == x
    
};

console.log(isPalindrome(11))
