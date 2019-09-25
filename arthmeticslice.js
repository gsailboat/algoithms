var numberOfArithmeticSlices = function(A) {
	var len = 0;
	if (A.length < 3)
			return 0;
	for (let i = 1; i < A.length - 1; i++) {
		if (A[0] - A[1] === A[i] - A[i + 1])
			len++;
	}
	len += 2;
	if (len === 3)
		len = 1;
	else {
		let final = len;
		let count = 2;
		for (let x = final; x >= 3; x--) {
			if (x === final)
				len = 1;
			else {
				len += count;
				count++;
			}
		}
	}
	return len;
}

console.log(numberOfArithmeticSlices([1,2,3,8,9,10]));