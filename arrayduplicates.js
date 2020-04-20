var onlyduplicates = function(array) {
	let answer = [];

	for (const c of array[0]) {
		for (var j = 1; j < array.length; j++) {
			if (!array[j].includes(c))
				break ;
			else
				array[j] = array[j].slice(0, array[j].indexOf(c)) + array[j].slice(array[j].indexOf(c) + 1);
		}
		if (j === array.length)
			answer.push(c)
	}
	return answer;
}

console.log(onlyduplicates(["hello", "little", "fellow"]));