class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined; // handle duplicates
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else if (value > current.value) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	// find(value) {
	// 	if (this.root === null) return false;
	// 	if (this.root.value === value) return true;
	// 	let current = this.root;
	// 	let found = false;
	// 	while (current && !found) {
	// 		if (value < current.value) {
	// 			current = current.left;
	// 		} else if (value > current.value) {
	// 			current = current.right;
	// 		} else {
	// 			found = true;
	// 		}
	// 	}
	// 	return found;
	// }

	find(value) {
		let current = this.root;

		while (current) {
			if (value === current.value) return true;
			current = value < current.value ? current.left : current.right;
		}

		return false;
	}
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);

console.log(tree.find(7)); // true
console.log(tree.find(13)); // true
console.log(tree.find(20)); // false
