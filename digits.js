let answer = 0;

var addDigits = function(num) {
	let length = num.toString().length;
	let current = 0;

	for (let i = length; i > 0; i--) {
		current += num % 10;
		num = Math.floor(num / 10);
	}
	answer = current;
	if (answer < 10)
		return answer;
	return addDigits(answer);	
};

console.log(addDigits(8885));