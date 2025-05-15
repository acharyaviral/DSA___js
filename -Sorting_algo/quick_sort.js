function pivot(arr, start = 0, end = arr.length - 1) {
	function swap(array, i, j) {
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	const pivotValue = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivotValue) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	swap(arr, start, swapIdx);
	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIndex = pivot(arr, left, right); // returns the correct pivot position
		quickSort(arr, left, pivotIndex - 1); // left side
		quickSort(arr, pivotIndex + 1, right); // right side
	}
	return arr;
}

// Test
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// ES2015
function pivot2(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	// We are assuming the pivot is always the first element
	const pivot2 = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot2 > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	// Swap the pivot from the start the swapPoint
	swap(arr, start, swapIdx);
	return swapIdx;
}

pivot2([4, 8, 2, 1, 5, 7, 6, 3]);
