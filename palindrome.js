function palindrome(str) {
  var copy1 = str.toLowerCase();
  var copy2 = copy1.replace(/[\W_]/g, '');
  //copy1.replace(/\W+/g,"").replace(/\d+/g,"").replace(/\s+/g).replace(/_/g,"");

  var copy3 = copy2.split("").reverse().join("");

  console.log( copy3 == copy2);
  //console.log("Copy2: " + copy2 + "\n" + "Copy3: " + copy3);
  //return copy3;
  //return true;
}


palindrome("eye") //should return a boolean.
palindrome("eye") //should return true.
palindrome("_eye") //should return true.
palindrome("race car") //should return true.
palindrome("not a palindrome") //should return false.
palindrome("A man, a plan, a canal. Panama") //should return true.
palindrome("never odd or even") //should return true.
palindrome("nope") //should return false.
palindrome("almostomla") //should return false.
palindrome("My age is 0, 0 si ega ym.") //should return true.
palindrome("1 eye for of 1 eye.") //should return false.
palindrome("0_0 (: /-\ :) 0-0") //should return true.
palindrome("five|\_/|four") //should return false.
