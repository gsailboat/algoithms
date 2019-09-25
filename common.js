var common = function(s1, s2) {
	let index = 0;
	let answer = "";

	for (let i; i < s1.length && s2[index]; i++) {
		while (s2[index] !== s1[i] ) {
			index++;
		}
		if (s1[i] === s2[index]) {
			answer += s1[i];
			index++;
		}
	}
	return answer;
}

console.log(common("ABAZDC", "BACBAD"));