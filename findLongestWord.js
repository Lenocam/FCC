function findLongestWord(str) {
  var array = str.split(" ");
  var longestWordValue = 0
  //return str.length;
  array.forEach(function (element) {
     if (longestWordValue < element.length) {
       longestWordValue = element.length;
     }
  });
  console.log(longestWordValue);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("The quick brown fox jumped over the lazy dog") //should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") //should return 6.
findLongestWord("May the force be with you") //should return 5.
findLongestWord("Google do a barrel roll") //should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") //should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") //should return 19.
