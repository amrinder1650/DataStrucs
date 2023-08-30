class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    var oldTail = this.tail;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      oldTail.previous = null;
    }

    this.length--;
    return oldTail;
  }

  shift() {
    var oldHead = this.head;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {return undefined}
    if(index <= this.length/2) {
      var currentItem = this.head;
      var counter = 0;
      while (counter <= index) {
        if (counter === index) {
          return currentItem;
        }
        currentItem = currentItem.next;
        counter++;
      }
    } else {
      var currentItem = this.tail;
      var counter = this.length - 1;
      while (index <= counter) {
        if (counter === index) {
          return currentItem;
        }
        currentItem = currentItem.previous;
        counter--;
      }
    }
  }

  set(index, val) {
    var item = this.get(index);
    item.val = val;
    return this;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return this;
    } else if (index === this.length) {
      this.push(val);
      return this;
    } else {
      var before = this.get(index - 1);
      var after = this.get(index);

      var newNode = new Node(val);
      before.next = newNode;
      after.previous = newNode;
      newNode.previous = before;
      newNode.next = after;

      this.length++;
      return this;
    }
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      var before = this.get(index - 1);
      var after = this.get(index + 1);

      var current = this.get(index);
      current.previous = null;
      current.next = null;

      before.next = after;
      after.previous = before;

      this.length--;
      return current;
    }
  }
}

var test = new DoublyLinkedList();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.push(5);
test.push(6);
test.push(7);
// console.log(test.shift());
// test.unshift(0);
console.log(test.remove(5));
console.log(test)