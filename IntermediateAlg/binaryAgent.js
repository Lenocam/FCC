function binaryAgent(str) {
  var myArray = [];
  var newThing = "";
  //spits string into array
  myArray = str.split(" ");
  for (var i = 0; i < myArray.length; i++) {
    //parseInt changes strings to integers and converts binary to two digit CharCode
    //fromCharCode converts the converted binary into Character it reprsents
    // += adds each Character as it is converted to the existing that proceeded it
    newThing += String.fromCharCode(parseInt(myArray[i], 2));
  }

  return newThing;
}
//console.log(binaryAgent("01000001"));
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); //should return "Aren't bonfires fun!?"
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));  //should return "I love FreeCodeCamp!"
