function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  //access the keys and thier variables in source
  //iterate through collections array
  for (var i = 0; i < collection.length; i++) {
    var keyMatches = 0;
    //iterate over keys in source
    for (var key in source) {
      //If an instance of an object has the key and the value of that key
      //is equal to the source key value
      if ((collection[i].hasOwnProperty(key)) && (collection[i][key] == source[key])) {
        //increment 1
        keyMatches++;
      }
    }
    //check the keyMatches length against the length of souceKeys array
    if (keyMatches == sourceKeys.length) {
      //if they match push to arr
      arr.push(collection[i]);
    }
  }

  console.log(arr);
  // return arr;

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) //should return [{ "a": 1, "b": 2, "c": 2 }]
