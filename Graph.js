class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key) {
    this.adjacencyList[key] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  deleteEdge(vertex1, vertex2) {
    for (var i = 0; i < this.adjacencyList[vertex1].length; i++) {
      if (this.adjacencyList[vertex1][i] === vertex2) {
        this.adjacencyList[vertex1].splice(i, 1);
        break;
      }
    }

    for (var i = 0; i < this.adjacencyList[vertex2].length; i++) {
      if (this.adjacencyList[vertex2][i] === vertex1) {
        this.adjacencyList[vertex2].splice(i, 1);;
        break;
      }
    }
  }

  deleteVertex(vertex) {
    var list = this.adjacencyList[vertex];
    while (list.length > 0) {
      this.deleteEdge(vertex, list[0])
    }
    delete this.adjacencyList[vertex];
  }
}

var test = new Graph();
test.addVertex('India');
test.addVertex('USA');
test.addVertex('Brazil');
test.addVertex('Mexico');
test.addVertex('Canada');
test.addVertex('China');
test.addEdge('USA', "Brazil");
test.addEdge('Brazil', "China");
test.addEdge('Mexico', "Canada");
console.log(test);
test.deleteVertex("Brazil")
console.log(test);