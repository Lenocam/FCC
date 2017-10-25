function uniteUnique(arr) {
  //array with final answer
  var solutionArray = [];
  //make arguments into regular array
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      //if solutionArray doesn't have current indexes key
      if (!solutionArray.includes(args[i][j])) {
        //push into solutionArray
        solutionArray.push(args[i][j]);
      }
    }
  }
  // return solutionArray;
  console.log(solutionArray);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); //should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]); //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); //should return [1, 2, 3, 5, 4, 6, 7, 8].
