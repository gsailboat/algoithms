var calPoints = function(ops){
	var answer = 0;
	var last = [];

	for (var i = 0; i < ops.length; i++) {
		if (ops[i] === 'C') {
			answer -= last[0];
			last.shift();
		}
		else if (ops[i] === 'D') {
			answer += last[0] * 2;
			last.unshift(last[0] * 2)
		}
		else if (ops[i] === '+') {
			answer += last[0] + last[1];
			last.unshift(last[0] + last[1]);
		}
		else {
			ops[i] = parseInt(ops[i], 10);
			answer += ops[i];
			last.unshift(ops[i]);
		}
	}
	return answer;
};

console.log(calPoints(["5", "2", "C", "D", "+"]))