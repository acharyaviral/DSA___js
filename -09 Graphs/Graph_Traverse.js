class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1] || [];
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2] || [];
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2,
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1,
		);
	}

	removeVertex(vertex) {
		const adjacentVertices = [...this.adjacencyList[vertex]];
		for (const adjacentVertex of adjacentVertices) {
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}

	depthFirstRecursive(start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			// biome-ignore lint/complexity/noForEach: <explanation>
			adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					dfs(neighbor);
				}
			});
		})(start);

		return result;
	}

	depthFirstIterative(start) {
		const result = [];
		const visited = {};
		const stack = [start];
		let currentVertex;

		visited[start] = true;
		while (stack.length) {
			currentVertex = stack.pop();
			console.log(stack);
			result.push(currentVertex);

			// biome-ignore lint/complexity/noForEach: <explanation>
			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");

console.log(g.depthFirstRecursive("A")); // ["A", "B", "D", "C"]

g.depthFirstIterative("A"); // ["A", "C", "D", "B"]
