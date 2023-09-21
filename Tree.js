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

  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;

    queue.push(this.root);

    while(queue.length > 0) {
      node = queue.shift();
      data.push(node.value);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  DFS(){
    var data = [];

    var traverse = function(node) {
      data.push(node.value);
      if (node.left) {traverse(node.left)}
      if (node.right) {traverse(node.right)}
    }
    traverse(this.root);
    return data;
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
console.log(test.BFS());
console.log(test.DFS());
