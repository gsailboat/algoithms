var countSubstrings = function(s) {
	var answer = s.length;
	// var len = 2;

	for (var len = 2; len <= s.length; len++) {
		for (var start = 0; start + len <= s.length; start++) {
			var sub = s.substring(start, start + len);

			for (var i = 0; i < sub.length / 2; i++) {
				if (sub[i] !== sub[sub.length - 1 - i])
					break;
			}
			if (i === Math.round(sub.length / 2))
				answer++;
		}
	}
	return answer;
}

console.log(countSubstrings('racecar'));