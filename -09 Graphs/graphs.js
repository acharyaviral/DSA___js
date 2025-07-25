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
}

const flights = new Graph();
flights.addVertex("New York");
flights.addVertex("Los Angeles");
flights.addVertex("Chicago");
flights.addEdge("New York", "Los Angeles");
flights.addEdge("New York", "Chicago");
flights.addEdge("Los Angeles", "Chicago");
flights.removeEdge("New York", "Chicago");
console.log(flights.adjacencyList);

// {
//   "New York": ["Los Angeles"],
//   "Los Angeles": ["New York", "Chicago"],
//   "Chicago": ["Los Angeles"]
// }
