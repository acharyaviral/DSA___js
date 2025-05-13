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
