function spinalCase(str) {
  function upperToHyphenLower(match, offset) {
    //ternary if offset exists, replace with hypen or blankspace
    return (offset ? '-' : '') + match.toLowerCase();
  }
  //sets match and calls upperToHyphenLower function
  str = str.replace(/[A-Z]|\s\b[a-z]/g, upperToHyphenLower);
  //replaces spaces and uderscores with nothing
  str = str.replace(/\s|_/g, "");

  console.log(str);
  // return str;
}

spinalCase("This Is Spinal Tap"); //should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); //should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); //should return "all-the-small-things".
