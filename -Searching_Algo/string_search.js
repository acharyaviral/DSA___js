//string search
function stringSearch(long, pattern) {
	for (let i = 0; i <= long.length - pattern.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (long[i + j] !== pattern[j]) {
				break;
			}
			if (j === pattern.length - 1) {
				return i;
			}
		}
	}
	return -1;
}

//stringSearch("abab cabc abababd", "ababd") // 10
