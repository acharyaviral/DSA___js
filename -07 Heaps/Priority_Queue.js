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

			if (element.priority >= parent.priority) break; // lower number = higher priority

			// Swap
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

// Example usage
const ER = new PriorityQueue();
ER.enqueue("Common Cold", 5); // Low priority
ER.enqueue("Gunshot Wound", 1); // High priority
ER.enqueue("High Fever", 4);
ER.enqueue("Broken Arm", 3);
ER.enqueue("Head Injury", 2);

console.log(ER.dequeue()); // { val: "Gunshot Wound", priority: 1 }
console.log(ER.dequeue()); // { val: "Head Injury", priority: 2 }
