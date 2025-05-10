// ❌ Inefficient solution using nested loops and splice()
// Compares if every value in arr1 has its squared counterpart in arr2
// Uses .indexOf() and .splice(), making it slow for large inputs
// Time Complexity: O(n^2) - indexOf runs in O(n) inside a loop
// Space Complexity: O(1) - no extra space beyond input mutation

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		const correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		console.log(arr2);
		arr2.splice(correctIndex, 1); //
	}
	return true; // All squares matched
}

// same([1, 2, 3, 2], [9, 1, 4, 4]); // Output: true

/////////////////////////////////////////////////////////

// ✅ Efficient solution using Frequency Counter pattern
// Builds frequency maps for both arrays to compare occurrences
// Avoids nested loops by using object lookup
// Time Complexity: O(n) - single pass through both arrays
// Space Complexity: O(n) - uses two frequency objects

function same2(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	const frequencyCounter1 = {};
	const frequencyCounter2 = {};

	// Count frequency of each number in arr1
	for (const val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}

	// Count frequency of each number in arr2
	for (const val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	console.log(frequencyCounter1);
	console.log(frequencyCounter2);

	// Check if each value in arr1 has a matching square in arr2
	for (const key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false; // Missing square
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}

	return true; // All values have correct squares and frequencies
}

// same2([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]); // Output: false
