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

	find(value) {
		let current = this.root;

		while (current) {
			if (value === current.value) return true;
			current = value < current.value ? current.left : current.right;
		}

		return false;
	}

	depthFirstSearchPreOrder() {
		const data = [];
		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}

	depthFirstSearchPostOrder() {
		const data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}
		traverse(this.root);
		return data;
	}

	depthFirstSearchInOrder() {
		const data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.depthFirstSearchPreOrder(); // [ 10, 6, 3, 8, 15, 20 ]
//     10
//    /  \
//   6    15
//  / \    \
// 3   8    20
