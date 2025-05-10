//inefficient  uses a nested loop, recalculating the sum of every subarray of length num, which takes O(n * num) time.
function maxSubarraySum(arr, num) {
	if (num > arr.length) {
		return null;
	}
	let max = Number.NEGATIVE_INFINITY; // Initialize to smallest possible number
	for (let i = 0; i < arr.length - num + 1; i++) {
		temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j]; // Sum up num elements
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

//refactored solution
//refactored version uses the sliding window pattern, updating the sum in constant time by subtracting the first value and adding the next one as the window moves, reducing time complexity to O(n).
function maxSubarraySum2(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;

	// First window sum
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;

	// Slide the window across the array
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}
maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
