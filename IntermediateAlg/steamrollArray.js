function steamrollArray(arr) {
  // I'm a steamroller, baby
  //checks to see if arr is an Array
  if (!Array.isArray(arr)) {
    //if it isn't it just returns the arr
    return [arr];
  }
  var array = [];

  for (var i = 0; i < arr.length; i++) {
    //concats array element recursively calls again for next element
    array = array.concat(steamrollArray(arr[i]));
  }

  return array;
}

console.log(steamrollArray([[["a"]], [["b"]]])); //should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]]) );//should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].
