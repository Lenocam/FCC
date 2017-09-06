function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return Array(num+1).join(str);
  } else {
    return "";
  }
}

console.log(repeatStringNumTimes("*", 3)); //should return "***".
console.log(repeatStringNumTimes("abc", 3)); //should return "abcabcabc".
console.log(repeatStringNumTimes("abc", 4)); //should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)); //should return "abc".
console.log(repeatStringNumTimes("*", 8)); //should return "********".
console.log(repeatStringNumTimes("abc", -2)); //should return "".
