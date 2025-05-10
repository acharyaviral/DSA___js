function isAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}

	const object = {};

	for (let i = 0; i < first.length; i++) {
		const letter = first[i];
		object[letter] = (object[letter] || 0) + 1;
	}
	console.log(object);
	for (let i = 0; i < second.length; i++) {
		const letter = second[i];
		if (!object[letter]) {
			return false;
		}
		object[letter] -= 1;
	}
	return true;
}

//isAnargram('hello', 'olleh'); // true
//isAnargram('hello', 'world'); // false
