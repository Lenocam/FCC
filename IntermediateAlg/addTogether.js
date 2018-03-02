function addTogether() {
  var params = [].slice.call(arguments);

  if (!params.every(function(param){
    return typeof param === 'number';
  })) {
    return undefined;
  }
  if (params.length === 2) {
    return params[0] + params[1];
  } else {
    var a = params[0];
    var addOneMore = function(b){
      return addTogether(a, b);
    };
    return addOneMore;
  }
}

console.log(addTogether(2, 3)); //should return 5.
console.log(addTogether(2)(3)); //should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); //should return undefined.
console.log(addTogether(2, "3")); //should return undefined.
console.log(addTogether(2)([3])); //should return undefined.
