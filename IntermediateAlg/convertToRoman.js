function convertToRoman(num) {
  //string to save the completed roman numeral
  var romanNum = "";
  //object to hold the numbers and their Roman numeral equivilant
  var romanObject = {
     M: 1000,
    CM: 900,
     D: 500,
    DC: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  };
  //iterates over romanObject
  for (var key in romanObject) {
     while (num >= romanObject[key]) {
       //adds romanObject key to answer
       romanNum += key;
       //subtracts the value from the number being converted
       num -= romanObject[key];
     }
  }
  //answer after number reaching converted hits 0
  // return romanNum;
  console.log(romanNum);
}

convertToRoman(2253);
convertToRoman(2) //should return "II".
convertToRoman(3) //should return "III".
convertToRoman(4) //should return "IV".
convertToRoman(5) //should return "V".
convertToRoman(9) //should return "IX".
convertToRoman(12) //should return "XII".
convertToRoman(16) //should return "XVI".
convertToRoman(29) //should return "XXIX".
convertToRoman(44) //should return "XLIV".
convertToRoman(45) //should return "XLV"
convertToRoman(68) //should return "LXVIII"
convertToRoman(83) //should return "LXXXIII"
convertToRoman(97) //should return "XCVII"
convertToRoman(99) //should return "XCIX"
convertToRoman(500) //should return "D"
convertToRoman(501) //should return "DI"
convertToRoman(649) //should return "DCXLIX"
convertToRoman(798) //should return "DCCXCVIII"
convertToRoman(891) //should return "DCCCXCI"
convertToRoman(1000) //should return "M"
convertToRoman(1004) //should return "MIV"
convertToRoman(1006) //should return "MVI"
convertToRoman(1023) //should return "MXXIII"
convertToRoman(2014) //should return "MMXIV"
convertToRoman(3999) //should return "MMMCMXCIX"
































// function convertToRoman(num) {
//   var digit = Array.from(num.toString()).map(Number);
//   var digitLength = digit.length;
//
//   var rNumeral = "";
//
  // if (digitLength => 4) {
  //   rNumeral += "M".repeat(digit[0]);
  //   if (digit[1] === 9) {
  //     rNumeral += "CM";
  //   } else if (digit[1] >= 5) {
  //     rNumeral += "D";
  //     moduled = digit[1] % 5;
  //     rNumeral += "C".repeat(moduled)
  //   } else if (digit[1] === 4) {
  //     rNumeral += "CD";
  //   } else if (digit[0] < 4) {
  //     rNumeral += "C".repeat(digit[1]);
  //   }
  //   if (digit[2] === 9) {
  //     rNumeral += "XC";
  //     else if (true) {
  //
  //     }
  //   }
  //
  //   console.log(rNumeral);
  // }
// }


// switch (digitLength) {
//   case 4:
//     calledFunction.apply(this,
//     [thousands = digit[0],
//     hundreds  = digit[1],
//     tens      = digit[2],
//     ones      = digit[3]]
//     );
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
