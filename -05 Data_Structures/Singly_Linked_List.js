class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		const currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null; // Fixed: was "index > 0"
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, val) {
		const foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);
		const newNode = new Node(val);
		const prev = this.get(index - 1);
		const temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		const prevNode = this.get(index - 1);
		const removed = prevNode.next;
		prevNode.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

	print() {
		let current = this.head;
		let result = "";
		while (current) {
			result += `${current.val} -> `;
			current = current.next;
		}
		console.log(result);
	}
}

// Example usage
const list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");
list.print(); //  display: Hello -> World -> ! ->
