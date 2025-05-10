//inefficient solution for find index of element in sorted array
// linear search
function search(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
}

//binary search
function search2(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		const middle = Math.floor((min + max) / 2);
		const currentElement = arr[middle];

		if (currentElement < val) {
			min = middle + 1;
		} else if (currentElement > val) {
			max = middle - 1;
		} else {
			return middle; // Element found
		}
	}
}
