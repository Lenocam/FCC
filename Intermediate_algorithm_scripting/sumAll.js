function sumAll(arr) {
  /* uses the destructuring assignment syntax to allow the Math  functions
    to extract data from arrays.
  */
  let smallest = Math.min(...arr);
  let largest = Math.max(...arr);
  //create array variable
  let array = [];
  //iterate between largest and smallest numbers and push to array
  for (let i = smallest; i <= largest; i++) {
    array.push(i);
  }

  /*uses reduce() to make an array a single value in this case we used the accumulator number to add each array element to total and set that to sum*/
  let sum = array.reduce((total, num) => total + num, 0);
  return sum;
}

console.log(sumAll([1, 4])); //should return 10.
console.log(sumAll([4, 1])); //should return 10.
console.log(sumAll([5, 10])); //should return 45.
console.log(sumAll([10, 5])); //should return 45.
