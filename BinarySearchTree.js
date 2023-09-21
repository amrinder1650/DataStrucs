class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if(!this.root) {
      this.root = new Node(value);
    } else {
      var current = this.root;
      var empty = false;

      while(!empty) {
        if(!current) {
          this.root = new Node(value);
          empty = true;
        }
        if(value < current.value) {
          if(!current.left) {
            current.left = new Node(value);
            empty = true;
          } else {
            current = current.left;
          }
        }
        if(value > current.value) {
          if(!current.right) {
            current.right = new Node(value);
            empty = true;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if(!this.root) {
      return false;
    } else {
      var current = this.root;
      var empty = false;

      while(!empty) {
        if(value === current.value) {
          return true;
        }
        if(value < current.value) {
          if(!current.left) {
            return false
          } else {
            current = current.left;
          }
        }
        if(value > current.value) {
          if(!current.right) {
            return false;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

var test = new BinarySearchTree();
test.insert(3);
test.insert(2);
test.insert(1);
test.insert(5);
test.insert(6);
test.insert(4);
test.insert(3.5);
console.log(test.find(3));
console.log(test.find(3.5));