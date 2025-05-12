// inefficient bubble sort
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

bubbleSort([5, 3, 8, 4, 2, 1]);

//
function bubbleSort2(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

bubbleSort2([5, 3, 8, 4, 2, 1]);

//Es6
function bubbleSort3(arr) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

//nearly sorted array
function bubbleSort4(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}
