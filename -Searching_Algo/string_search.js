//string search
function stringSearch(long, pattern) {
	for (let i = 0; i <= long.length - pattern.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (long[i + j] !== pattern[j]) {
				console.log("Break");
				break;
			}
			if (j === pattern.length - 1) {
				console.log("Found One");
				return i;
			}
		}
	}
}

//stringSearch("abab cabc abababd", "ababd") // 10
