var shortest = function(S, C) {
	var index = [];
	var answer = [];

	for (var i = 0; i < S.length; i++) {
		if (S[i] === C)
			index.push(i);
	}
	console.log(index);
	i = 0;
	for (var a = 0; a < S.length; a++) {
		if (S[a] === C)
			answer.push(0);
		else if ((Math.abs(index[i] - a) < Math.abs(index[i + 1] - a)) || i === index.length - 1)
			answer.push(Math.abs(index[i] - a));
		else {
			i++;
			answer.push(Math.abs(index[i] - a))
		}
	}
	console.log(answer);
	return answer;
}
shortest("loveleetcode", 'e');