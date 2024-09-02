function reverseString(str) {
    var strArr = str.split("");
    var reverseArr = strArr.reverse();
    var reverseStr = reverseArr.join('');
    return reverseStr;
}
var given_str = "This is a reverse string";
var reverse_str = reverseString(given_str);
console.log("Given string: " + given_str);
console.log("Reversed string: " + reverse_str);
