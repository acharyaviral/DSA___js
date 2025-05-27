class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		const newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			const parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			const leftChildIdx = 2 * idx + 1;
			const rightChildIdx = 2 * idx + 2;
			let leftChild;
			let rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class WeightedGraph {
	constructor() {
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

		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest && distances[smallest] !== Number.POSITIVE_INFINITY) {
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
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.dijkstra("A", "E");
// Output: [ 'A', 'C', 'D', 'F', 'E' ]
