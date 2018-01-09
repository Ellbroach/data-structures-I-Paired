function Queue() {
  this.myStartIdx = 0;
  this.mySize = 0;
  this.myStorage = [];
}

Queue.prototype.size = function () {
  return this.mySize;
}

Queue.prototype.enqueue = function (obj) {
  //we are going to add to the array
  var newLastIdx = this.mySize + this.myStartIdx; // this should be the spot after the last
  this.myStorage[newLastIdx] = obj;
  //we just added an item, now lets increase the count
  this.mySize++;
}

Queue.prototype.dequeue = function () {
  if (this.mySize > 0) {
    //move the start up so we no longer look at items that were removed
    this.myStartIdx++;
    this.mySize--;
    //return the item that was just removed
    return this.myStorage[this.myStartIdx - 1];
  }
}
