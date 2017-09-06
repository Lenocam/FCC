function titleCase(str) {
  var array = str.toLowerCase().split(" ");
  var copy = [];
  array.forEach(function(element) {
    copy.push(element.charAt(0).toUpperCase() + element.slice(1));
  });
  return copy.join(" ");
}

console.log(titleCase("I'm a little tea pot")); //should return a string.

console.log(titleCase("I'm a little tea pot")); //should return "I'm A Little Tea Pot".
console.log(titleCase("sHoRt AnD sToUt")); //should return "Short And Stout".
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); //should return "Here Is My Handle Here Is My Spout".
