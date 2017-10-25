
function translatePigLatin(str) {
  //checks if the first letter in the string is a vowel
  if (str.match(/\b[aeiou]/i)) {
    //if it is just adds "way" to end of word
    //and returns
    //return str + "way";
    console.log(str + "way");
    //else it begins with a constant
  } else {
    //saves first 1 or 2 consonants from word
    var gotTook = str.match(/\b[^aeiou]{1,2}/i);
    //saves what is left after after the first 1 or 2 consonants are taken off of the word
    var whatsLeft = str.split(/\b[^aeiou]{1,2}/i);
    //returns whatsLeft with , sliced off then the gotTook consonants and "ay" in pig latin order
    //return whatsLeft.slice(1) + gotTook + "ay";
    console.log(whatsLeft.slice(1) + gotTook + "ay");
  }
}



translatePigLatin("california") //should return "aliforniacay".
translatePigLatin("paragraphs") //should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway".
