function rot13(str) {
  var decodedArray = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 90 || str.charCodeAt(i) < 65) {
      decodedArray.push(str[i]);
    } else {
      if (str.charCodeAt(i) <= 77) {
        decodedArray.push(String.fromCharCode(str.charCodeAt(i) + 13));
      } else {
        decodedArray.push(String.fromCharCode(str.charCodeAt(i) - 13));
      }
    }
  }
  console.log(decodedArray.join(""));
}

rot13("SERR PBQR PNZC") //should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") //should decode to "FREE PIZZA!"
rot13("SERR YBIR?") //should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
