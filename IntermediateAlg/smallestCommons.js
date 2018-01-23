function smallestCommons(arr) {
  arr = arr.sort();
  var low = arr[0];
  var high = arr[1];
  var range = [];

  for (var i = low; i <= high; i++) {
    range.push(i);
  }
  var LCM = 0;
  var shutItDown = true;

  while (shutItDown) {
    LCM++;
    for (var j = range[0]; j <= range[range.length-1]; j++) {

      if (LCM % j !== 0) {
        break;
      } else if (j == range[range.length-1]) {
        shutItDown = false;
      }
    }
  }
  return LCM;
  //console.log(LCM);
}




smallestCommons([1, 5]); //should return a number.
smallestCommons([1, 5]); //should return 60.
smallestCommons([5, 1]); //should return 60.
smallestCommons([1, 13]); //should return 360360.
smallestCommons([23, 18]); //should return 6056820.
