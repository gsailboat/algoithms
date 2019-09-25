var second = function(list) {
	let max = 0;
	let second = 0;

	for (let i = 1; i < list.length; i++) {
		if (list[i] > max) {
			second = max;
			max = list[i];
		}
		else if (list[i] > second && list[i] < max)
			second = list[i];
	}
	return second;
}

console.log(second([4,5,6,7,7]))