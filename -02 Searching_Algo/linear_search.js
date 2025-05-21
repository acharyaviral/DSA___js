//linear_search
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i; // Return the index of the target element
		}
	}
	return -1; // Return -1 if target is not found
}
//linearSearch([1, 2, 3, 4, 5], 3); // returns 2
