function destroyer(arr, ...args) {

  var argsArray = Array.from(args);
  var heyArray = arr.filter(function(element){
    return !argsArray.includes(element);
  });
  return heyArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1].
destroyer([2, 3, 2, 3], 2, 3) //should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) //should return ["hamburger"].
