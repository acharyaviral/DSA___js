function numCompare(a, b) {
	return a - b;
}
// [6, 2, 3, 1, 5, 4].sort(numCompare);

function stringCompare(str1, str2) {
	return str1.length - str2.length;
}
// ["apple", "banana", "kiwi", "pear"].sort(stringCompare);
