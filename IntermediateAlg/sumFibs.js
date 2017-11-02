function sumFibs(num) {
  //variables to save state of each number
  var first = 0,
    second = 1,
    next = 1,
    total = 0;
    //make Fibonacci sequence until you reach prescribed number
  for (var i = 0; second <= num; i++) {
    //only add odd numbers to total
    if (next % 2 !== 0) {
      total += next;
    }
    //change variables for next Fibonacci sequence
    next = first + second;
    first = second;
    second = next;

  }
  // return total;
  console.log(total);
}

sumFibs(1); //should return a number.
sumFibs(1000); //should return 1785.
sumFibs(4000000); //should return 4613732.
sumFibs(4); //should return 5.
sumFibs(75024); //should return 60696.
sumFibs(75025); //should return 135721.
