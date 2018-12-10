var uncommonFromSentences = function(A, B) {
	//var string = A.concat(" " + B);
	A.trim();
	B.trim();
	var string = A.concat(" " + B);
	var answer = [];
	string = string.split(" ");
	string.sort();

	for (var i = 0; i <= string.length; i++) {
		if (string[i - 1] != string[i] && string[i + 1] != string[i])
			answer.push(string[i]);
	}

	console.log(string);
	return answer;
}

console.log(uncommonFromSentences("apple grapes grapes", "banana"));