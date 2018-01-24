function findElement(arr, func) {
  var num = arr.find(func);
  return num;

  //also this works, but it's a bit clumsier
  //var num = arr[0].filter(func);
  //return num;
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); //should return 8.
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));//should return undefined.
