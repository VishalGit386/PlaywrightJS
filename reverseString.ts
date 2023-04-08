function reverseString(str: string) {
    let strArr = str.split("");
    let reverseArr = strArr.reverse();
    let reverseStr = reverseArr.join('');
    return reverseStr;
  }
  
  let given_str = "hello world";
  let reverse_str = reverseString(given_str);
  
  console.log("Given string: " + given_str);
  console.log("Reversed string: " + reverse_str);
  