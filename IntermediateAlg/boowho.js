function booWho(bool) {
  //type of method returns primitive type
  //if it is equal to boolean retrun true
  if (typeof bool == "boolean") {
    return true;
  } else {
    return false;
  }

}
booWho(true) //`should return true.
booWho(false) //should return true.
booWho([1, 2, 3]) //should return false.
booWho([].slice) //should return false.
booWho({ "a": 1 }) //should return false.
booWho(1) //should return false.
booWho(NaN) //should return false.
booWho("a") //should return false.
booWho("true") //should return false.
booWho("false") //should return false.
