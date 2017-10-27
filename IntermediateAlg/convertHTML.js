function convertHTML(str) {
  //use split to seperate each character
  var stringSplit = str.split('');

  //iterate over each character to check for hmtl needed to be converted
  for (var i = 0; i < stringSplit.length; i++) {
    //use switch to change iteration if it crosses path
    //with a symbol we desire to change
    switch (stringSplit[i]) {
      case "&":
        stringSplit[i] = "&amp;";
        break;
      case "<":
        stringSplit[i] = "&lt;";
        break;

      case ">":
        stringSplit[i] = "&gt;";
        break;
      case '"':
        stringSplit[i] = "&quot;";
        break;
      case "'":
        stringSplit[i] = "&apos;";
        break;
    }
  }

  stringSplit = stringSplit.join('');
  console.log(stringSplit);
}

convertHTML("Dolce & Gabbana"); //should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); //should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve"); //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"'); //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List"); //should return Shindler&​apos;s List.
convertHTML("<>"); //should return &​lt;&​gt;.
convertHTML("abc"); //should return abc.
