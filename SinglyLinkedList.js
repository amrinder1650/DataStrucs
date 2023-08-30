class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {

    var deletedNode = this.tail;

    if(this.length === 0) {
      return deletedNode;
    }

    if(this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
      return deletedNode;
    }

    var currentNode = this.head;

    for (var i = 1; i < this.length; i++) {
      if(i === this.length-1) {
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return deletedNode;
      }

      currentNode = currentNode.next;
    }
  }

  shift() {
    if(this.length === 0) {
      return undefined;
    }

    var oldHead = this.head;
    this.head = this.head.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    var oldHead = this.head;
    this.head = new Node(val);
    this.head.next = oldHead;
    this.length++;

    if (this.length === 1) {
      this.tail = this.head;
    }
    return this;
  }

  get(index) {
    if(index + 1 > this.length || index < 0) {return undefined}
    var currentItem = this.head;

    for (var i = 0; i < index; i++) {
      currentItem = currentItem.next;
    }

    return currentItem;
  }

  set(index, val) {
    if(index + 1 > this.length || index < 0) {return undefined}
    var currentItem = this.head;

    for (var i = 0; i < index; i++) {
      currentItem = currentItem.next;
    }

    currentItem.val = val;
    return currentItem;
  }

  insert(index, val) {

    if(index === 0) {
      this.unshift(val);
      return this;
    }
    if(index === this.length) {
      this.push(val);
      return this;
    }
    var item = this.get(index - 1);
    var oldNext = item.next;

    item.next = new Node(val);
    item.next.next = oldNext;
    this.length++;

    return this;
  }

  remove(index) {
    if(index === 0) {
      return this.shift();
    }
    if(index === this.length - 1) {
      return this.pop();
    }

    var removeItem = this.get(index);
    var previous = this.get(index - 1);

    previous.next = removeItem.next;
    this.length--;

    return removeItem;
  }

  reverse() {
    var reversed = new SinglyLinkedList();

    var currentItem = this.head;

    for (var i = 0; i < this.length; i++) {
      reversed.unshift(currentItem.val);
      currentItem = currentItem.next;
    }

    return reversed;
  }
}

var test = new SinglyLinkedList();
test.push(1);
test.push(2);
test.push(3);
console.log(test.reverse());