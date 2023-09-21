class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    var childGreaterThanParent = true;
    var indexOfValue = this.values.length - 1;

    while(childGreaterThanParent && this.values.length > 1) {
      var indexOfParent = Math.floor((indexOfValue - 1)/2)
      if (value <= this.values[indexOfParent]) {
        childGreaterThanParent = false;
      } else {
        this.values[indexOfValue] = this.values[indexOfParent]
        this.values[indexOfParent] = value;
        indexOfValue = indexOfParent;
        if(indexOfValue === 0) {childGreaterThanParent = false;}
      }
    }
  }

  extractMax() {
    if(this.values.length === 0) {return undefined}
    if(this.values.length === 1) {return this.values.pop()}
    var result = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    var parentInx = 0;
    var parent = this.values[0];

    while(true) {
      var child1Inx = 2 * parentInx + 1;
      var child1 = this.values[child1Inx];
      var child2Inx = 2 * parentInx + 2;
      var child2 = this.values[child2Inx];

      if (child1 === undefined && child2 === undefined) {break;}

      if ((parent > child1 && parent > child2) || (parent > child1 && child2 === undefined)) {
        break;
      } else {
        if(child1 >= child2 || child2 === undefined) {
          this.values[parentInx] = child1;
          this.values[child1Inx] = parent;
          parentInx = child1Inx;
        }
        if(child1 < child2) {
          this.values[parentInx] = child2;
          this.values[child2Inx] = parent;
          parentInx = child2Inx;
        }
      }
    }

    return result;
  }
}

var test = new MaxBinaryHeap()
test.insert(50);
test.insert(70);
test.insert(30);
// test.insert(20);
// test.insert(10);
// test.insert(45);
// test.insert(60);
// test.insert(55);
console.log(test.extractMax());
console.log(test);