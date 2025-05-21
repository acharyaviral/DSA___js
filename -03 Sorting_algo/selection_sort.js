//selection sort
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		const temp = arr[i];
		arr[i] = arr[lowest];
		arr[lowest] = temp;
	}
	return arr;
}

selectionSort([5, 3, 8, 4, 2, 1]);

// //es6
function selectionSort2(arr) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		swap(arr, i, lowest);
	}
	return arr;
}
selectionSort2([5, 3, 8, 4, 2, 1]);
