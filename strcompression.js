var stringcompression = function(str) {
	let answer = "";
	let count = 1;

	for (i = 0; i < str.length; i++) {
		if (str[i] !== str[i - 1] || i === 0) {
			if (count > 1)
				answer += (count);
			answer += (str[i]);
			count = 1;
		}
		else if (str[i] === str[i - 1])
			count++;
	}
	if (count > 1)
		answer += count;
	return answer;
}

console.log(stringcompression('aabccccddppaa'));