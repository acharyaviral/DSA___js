function merge(arr1, arr2) {
	const result = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	// Add remaining elements from arr1
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}

	// Add remaining elements from arr2
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
}

merge([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]

//Merge sort
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));

	return merge(left, right);
}

mergeSort([38, 27, 43, 3, 9, 82, 10]); // [3, 9, 10, 27, 38, 43, 82]

/////////////////////////////////////////////////////////////////////////////

////combine both functions
function mergeSort2(arr) {
	// Base case: arrays with 0 or 1 elements are already sorted
	if (arr.length <= 1) return arr;

	// Divide the array into two halves
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort2(arr.slice(0, mid));
	const right = mergeSort2(arr.slice(mid));

	// Merge the sorted halves
	return merge2(left, right);

	// Inner merge function
	function merge2(arr1, arr2) {
		const result = [];
		let i = 0;
		let j = 0;

		// Compare elements from both arrays and add the smaller one to result
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				result.push(arr1[i]);
				i++;
			} else {
				result.push(arr2[j]);
				j++;
			}
		}

		// Add remaining elements from arr1
		while (i < arr1.length) {
			result.push(arr1[i]);
			i++;
		}

		// Add remaining elements from arr2
		while (j < arr2.length) {
			result.push(arr2[j]);
			j++;
		}

		return result;
	}
}

// Example usage
console.log(mergeSort2([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]
