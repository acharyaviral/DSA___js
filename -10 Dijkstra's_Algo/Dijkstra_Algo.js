class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	constructor() {
		// ✅ fixed typo
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		const path = [];
		let smallest;

		// Initialize
		for (const vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Number.POSITIVE_INFINITY;
				nodes.enqueue(vertex, Number.POSITIVE_INFINITY);
			}
			previous[vertex] = null;
		}

		// Main loop
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				// Build path
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest && distances[smallest] !== Number.POSITIVE_INFINITY) {
				// ✅ fixed logic
				for (const neighbor of this.adjacencyList[smallest]) {
					const candidate = distances[smallest] + neighbor.weight;
					if (candidate < distances[neighbor.node]) {
						distances[neighbor.node] = candidate;
						previous[neighbor.node] = smallest;
						nodes.enqueue(neighbor.node, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

// ✅ Sample usage
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "B", 1);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E")); // 👉 Output: [ 'A', 'C', 'B', 'E' ]
