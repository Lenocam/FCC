function sumPrimes(num) {
  //array to store prime numbers
  var array = [];
  //loop through to num to see if it is prime
  for (var i = 2; i <= num; i++) {
    //call function that checks against j
    if (isPrime(i)) {
      //if it is true push into array
      array.push(i);
    }
  }
  //reduce/add everything in array together to get final answer
  return array.reduce(function(a, b) {
    return a + b;
  });

}
//seperate function to check num by all numbers less than it
function isPrime(num) {
  for (var j = 2; j < num; j++) {
    //if num when divided by j divdes eveningly
    if (num % j === 0) {
      //return false because you've discover a number that is not prime
      return false;
    }
  }
  //else return true because it is prime
  return true;
}

sumPrimes(10); //should return a number.
sumPrimes(10); //should return 17.
sumPrimes(977); //should return 73156.
sumPrimes(1500);
