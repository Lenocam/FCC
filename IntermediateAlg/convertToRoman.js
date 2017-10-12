function convertToRoman(num) {
  var rNumeral = "";
  var digit = Array.from(num.toString()).map(Number);
  var digitLength = digit.length;
  var thousands;
  var hundreds;
  var tens;
  var ones;

  for (var i = 0; i < digit.length; i++) {
    console.log(digit[i] * 3);

  }

  function thousandsFunction() {
    
  }
  // switch (digitLength) {
  //   case 4:
  //     thousands = digit[0];
  //     hundreds  = digit[1];
  //     tens      = digit[2];
  //     ones      = digit[3];
  //     break;
  //   case 3:
  //     hundreds = digit[0];
  //     tens     = digit[1];
  //     ones     = digit[2];
  //     break;
  //   case 2:
  //     tens     = digit[0];
  //     ones     = digit[1];
  //     break;
  //   case 1:
  //     ones    = digit[0];
  //     break;
  //   default:
  //
  // }
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
