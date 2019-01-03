var reverseOnlyLetters = function(S) {
	let reverse = "";

	for (let i = S.length; i >= 0; i--) {
		if ((S[i] >= 'a' && S[i] <= 'z') || (S[i] >= 'A' && S[i] <= 'Z'))
			reverse += S[i];
	}
	i = 0;
	let answer = S.split("");
	for (let a = 0; a < answer.length; a++) {
		if ((answer[a] >= 'a' && answer[a] <= 'z') || (answer[a] >= 'A' && answer[a] <= 'Z')) {
			answer[a] = reverse[i]; 
			i++; 
		}
	}
	return answer.join("");
}

console.log(reverseOnlyLetters("ab-efrr"))