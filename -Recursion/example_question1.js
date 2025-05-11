//power
function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	return base * power(base, exponent - 1);
}

//factorial
function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num - 1);
}

//productOfArray
function productOfArray(arr) {
	if (arr.length === 0) return 1;
	return arr[0] * productOfArray(arr.slice(1));
}

//recursiveRange
function recursiveRange(num) {
	if (num === 0) return 0;
	return num + recursiveRange(num - 1);
}

//fibnacci
function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}
