function pairElement(str) {
  //array for pairs/final answer
  var pairArray = [];
  //object that contains pairs
  var dnaPairs = {
    C: "G",
    G: "C",
    A: "T",
    T: "A"
  };
  //iterates over string of characters
  for (var i = 0, len = str.length; i < len; i++) {
    //checks object for matching pairs
    for (var key in dnaPairs) {
      if (str[i] === key) {
        //pushes character and its pair to pairArray
        pairArray.push([str[i], dnaPairs[key]]);
      }
    }
  }
  //displays final answer
  //return pairArray;
  console.log(pairArray);
}

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
