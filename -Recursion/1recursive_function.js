// Countdown using recursion
// Prints numbers from num down to 1, then prints "Done!"
function countDown(num) {
	if (num <= 0) {
		console.log("Done!");
		return;
	}
	console.log(num);
	countDown(num - 1);
}
countDown(5); // Output: 5 4 3 2 1 Done!

// Sum all numbers from num down to 1 using recursion
function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}
sumRange(4); // Returns 10

// Iterative factorial
// Multiplies numbers from num down to 1
function factorial(num) {
	let total = 1;
	for (let i = num; i > 0; i--) {
		total *= i;
	}
	return total;
}
factorial(5); // Returns 120

// Recursive factorial
function factorial2(num) {
	if (num === 1) return 1;
	return num * factorial2(num - 1);
}
factorial2(5); // Returns 120

// Helper method recursion: Collect all odd numbers from an array
function collectOddValues(arr) {
	const result = [];

	function helper(helperInput) {
		if (helperInput.length === 0) return;

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}

		helper(helperInput.slice(1));
	}

	helper(arr);
	return result;
}
collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Returns [1, 3, 5, 7, 9]

// Pure recursion version to collect odd numbers
function collectOddValues2(arr) {
	const newArr = [];

	if (arr.length === 0) return newArr;

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	return newArr.concat(collectOddValues2(arr.slice(1)));
}
collectOddValues2([1, 2, 3, 4, 5]); // Returns [1, 3, 5]
