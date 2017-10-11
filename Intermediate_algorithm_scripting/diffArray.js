function diffArray(arr1, arr2) {
  // create array to store answer
  var coolArray = [];
  //iterate second array
  for (var i = 0; i < arr2.length; i++) {
    //if arr1 doesnot include the instance of arr2
    if (!arr1.includes(arr2[i])) {
      //include it in coolArray
      coolArray.push(arr2[i]);
    }
  }

  //iterate over first array
  for (var j = 0; j < arr1.length; j++) {
    //if arr2 does not include the instance of arr1
    if (!arr2.includes(arr1[j])) {
      //include it in coolArray
      coolArray.push(arr1[j]);
    }
  }
  console.log(coolArray);
  // return coolArray;
}

diffArray([1, 2, 5], [1, 2]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
