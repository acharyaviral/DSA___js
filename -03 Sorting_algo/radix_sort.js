function getDigit(num, digit) {
	return Math.floor(Math.abs(num) / 10 ** digit) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function radixSort(arr) {
	const maxDigitCount = mostDigits(arr);
	let result = arr;
	for (let k = 0; k < maxDigitCount; k++) {
		const digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < result.length; i++) {
			const digit = getDigit(result[i], k);
			digitBuckets[digit].push(result[i]);
		}
		result = [].concat(...digitBuckets);
	}
	return result;
}

// Test
console.log(radixSort([48, 123, 4, 56, 78, 90, 12, 34, 567, 890]));
