class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addvertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = new Set();
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdge(v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }
  
  removeVertex(v) {
    if (!this.adjacencyList[v]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[v]) {
      this.removeEdge(v, adjacentVertex);
    }
    delete this.adjacencyList[v];
  }

  bfs(start) {
    if (!this.adjacencyList[start]) return null;
    let result = [];
    let visited = {};
    let stack = [start];
    let temp;

    visited[start] = true;
    while (stack.length) {
      temp = stack.pop();
      result.push(temp);
      this.adjacencyList[temp].forEach((element) => {
        if (!visited[element]) {
          stack.push(element);
          visited[element] = true;
        }
      });
    }
    console.log(result);
    return result;
  }
}

let g = new Graph();
g.addvertex("tokyo");
g.addvertex("japan");
g.addvertex("america");
console.log("Edge condition : ",g.hasEdge("tokyo","japan"))
g.addEdge("tokyo", "america");
g.addEdge("tokyo", "japan");
// g.removeEdge("tokyo","america")
g.display();
// g.removeVertex("japan");
g.bfs("tokyo");
// g.display();

