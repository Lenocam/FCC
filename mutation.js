
function mutation(arr) {
  var beLikeMe = arr[1].toLowerCase().split("");
  var lookHere = arr[0].toLowerCase().split("");
  var beMeLength = beLikeMe.length;
  var sameCount = 0;

  beLikeMe.forEach(function(element) {
    if (lookHere.indexOf(element) === -1)  {
      sameCount--;
    } else {
      sameCount++;
    }
  });
return sameCount == beMeLength;
}
//mutation(["hello", "hey"])


console.log(mutation(["hello", "hey"])); //should return false.
console.log(mutation(["hello", "Hello"])); //should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //should return true.
console.log(mutation(["Mary", "Army"])); //should return true.
console.log(mutation(["Mary", "Aarmy"])); //should return true.
console.log(mutation(["Alien", "line"])); //should return true.
console.log(mutation(["floor", "for"])); //should return true.
console.log(mutation(["hello", "neo"])); //should return false.
console.log(mutation(["voodoo", "no"])); //should return false.


/*  return "beLikeMe: " + beLikeMe +
         "\nlookHere: " + lookHere;
*/
  //console.log(beLikeMe);
  //console.log(lookHere);
