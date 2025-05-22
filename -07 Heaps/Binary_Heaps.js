class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			const parentIdx = Math.floor((idx - 1) / 2);
			const parent = this.values[parentIdx];
			if (element <= parent) break;
			this.values[idx] = parent;
			this.values[parentIdx] = element;
			idx = parentIdx;
		}
	}
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
//       41
//     /    \
//    39     33
//   /  \     /
//  18   27  12

heap.insert(55);
//        55
//      /    \
//    39      41
//   /  \    /  \
// 18   27 12  33
