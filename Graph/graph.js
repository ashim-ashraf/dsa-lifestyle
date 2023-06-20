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
      this.addvertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addvertex(v2);
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
  depthFirstSearchIterative(start) {
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
    return result;
  }

  bredthFirstSearch(start) {
    let result = [];
    let visited = {};
    let queue = [start];
    let temp;
    visited[start] = true;
    while (queue.length) {
      temp = queue.shift();
      result.push(temp);
      this.adjacencyList[temp].forEach((element) => {
        if (!visited[element]) {
          queue.push(element);
          visited[element] = true;
        }
      });
    }
    return result;
  }
  BFS(start) {
    let result = [];
    let visited = {};
    let queue = [];
    visited[start] = true;
    queue.push(start);
    while (queue.length > 0) {
      let s = queue.shift();
      result.push(s);
      this.adjacencyList[s].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
    }
    return result;
  }
  DFSutil(s, visited) {
    visited[s] = true;
    console.log(s);
    this.adjacencyList[s].forEach((element) => {
      if (!visited[element]) {
        this.DFSutil(element, visited);
      }
    });
  }

  DFS(s) {
    let visited = {};
    this.DFSutil(s, visited);
  }

}

let g = new Graph();
g.addvertex("1");
g.addvertex("2");
g.addvertex("3");
g.addvertex("4");
g.addvertex("5");
g.addvertex("6");
g.addvertex("7");
g.addEdge("1", "2");
g.addEdge("1", "4");
g.addEdge("1", "5");
g.addEdge("2", "6");
g.addEdge("2", "7");
g.addEdge("2", "3");
console.log(g.BFS("1"));
g.DFS("1")
