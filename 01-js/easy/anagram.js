/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function stringSort(str){
  const strSplit = str.split("")
  //console.log(strSplit)
  const strSort = strSplit.sort()
  return strSort.join("")
}
console.log(stringSort("weffa"))

function isAnagram(str1, str2) {
    if(stringSort(str1.toLowerCase()) === stringSort(str2.toLowerCase())){
      return true
    } else {
      return false
    }
}


module.exports = isAnagram;
