function fearNotLetter(str) {

  for (var i = 0; i < str.length; i++) {
    //set code of current character
    var code = str.charCodeAt(i);
    //set code of the next charcter
    var nextCode = str.charCodeAt(i+1);
    //since the codes increase by one for each letter, if the difference between
    //nextCode and code is greater than 1 then there is a letter missing
    if (nextCode - code > 1) {
      //return the next expected character after current code
      return String.fromCharCode(code+1);
    }
  }
  return undefined;
}

fearNotLetter("abce") //should return "d".
console.log("****");

fearNotLetter("abcdefghjklmno") //should return "i".
console.log("****");

fearNotLetter("bcd") //should return undefined.
console.log("****");

fearNotLetter("yz") //should return undefined.
console.log("****");
