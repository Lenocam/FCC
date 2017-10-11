function convertToRoman(num) {
  var rNumeral = "";
  var digit = Array.from(num.toString()).map(Number);
  var digitLength = digit.length;
  var thousands;
  var hundreds;
  var tens;
  var ones;

  switch (digitLength) {
    case 4:
      thousands = digit[0];
      hundreds  = digit[1];
      tens      = digit[2];
      ones      = digit[3];
      
      break;
    default:

  }

  console.log(digitLength);
  for (var i = 0; i < digit.length; i++) {
    console.log(digit[i] * 3);

  }
}

convertToRoman(3653);

// {
//   "1":"I",
//   "2":"V",
//   "10":"X",
//   "50":"L",
//   "100":"C",
//   "500":"D",
//   "1000":"M"
// }
//MMMDCLIII
//sudo
