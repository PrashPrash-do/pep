function reverseString(str) {
    return str.split("").reverse().join("");
    }
    var inputString = "Hello, World!";
    var reversedString = reverseString(inputString)
    console.log("Reversed string: " + reversedString);
    function isPrime(number) {
        if (number <= 1) {
        return false; }
        for (var i = 2; i < number; i++) {
        if (number % i === 0) {
        return false;} }
        return true;}
        var num = 17;
        var isNumPrime = isPrime(num);
        console.log("Is " + num + " a prime number? " +