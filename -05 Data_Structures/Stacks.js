class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	pop() {
		if (!this.first) return null;
		const temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop(); // 3
stack.pop(); // 2
stack.pop(); // 1
stack.pop(); // null
