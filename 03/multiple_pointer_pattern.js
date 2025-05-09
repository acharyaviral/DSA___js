// Inefficient brute-force solution
// Checks every pair of elements in the array to find a pair whose sum is zero
// Time Complexity: O(n^2) due to the nested loops
// Space Complexity: O(1) - no extra space used beyond a few variables

function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
	// Return undefined if no such pair found
}
// sumZero([-3, -2, -1, 0, 1, 2, 3]);
// returns [-3, 3] or any valid pair depending on loop

/////////////////////////////////////

// Efficient solution using two-pointer pattern
// Assumes the input array is sorted in ascending order
// Time Complexity: O(n) - only one pass through the array
// Space Complexity: O(1) - no extra space used beyond pointers

function sumZero2(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const sum = arr[left] + arr[right];

		if (sum === 0) {
			return [arr[left], arr[right]];
		}
		if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

//Two pointer pattern for count unique values in an array
function countUniqueValues(arr) {
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1; // Return the count of unique values
}

// [1,1,2,3,3,4,7,7,8,9,9,10]
