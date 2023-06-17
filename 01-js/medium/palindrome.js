/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transform(str){
    let strNew = ''
    for(let i = 0; i<str.length; i++){
      if(str[i]==" " || str[i] == "?" || str[i]== "." || str[i]=="!" || str[i]==","){
        continue
      } else {
        strNew += str[i]
        console.log(strNew)
      }
    }
    
    return strNew
}

function isPalindrome(str) {
    str = transform(str)
    const strRev = str.split("").reverse().join("").toLowerCase()
    console.log(strRev)
    if(str.toLowerCase() !== strRev){
      return false
    }
  return true;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
