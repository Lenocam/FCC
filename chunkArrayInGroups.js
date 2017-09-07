function chunkArrayInGroups(arr, size) {
  var awesomeArray = [];
  while (arr.length > 0) {
    awesomeArray.push(arr.slice(0, size));
    arr.splice(0, size);
  }
  return awesomeArray;
}
//console.log(awesomeArray);
/*
return "AwesomeArray: " + awesomeArray +
"\nArr: " + arr +
"\nArrsize: " + j +
"\nIndex 0: " + index0;

*/
  /*

  while (arr.length > 0) {
    return "fuck"
    //awesomeArray.push(arr.slice(0, size));
  }


  */

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //should return [["a", "b"], ["c", "d"]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //should return [[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //should return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //should return [[0, 1, 2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //should return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
