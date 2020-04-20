var oneaway = function(one, two) {
	if (one.length === two.length) {
		let same = 0;

		for (i = 0; i < one.length; i++) {
			if (one[i] === two[i])
				same++;
		}
		return same === one.length - 1;
	}
	else if (one.length === two.length + 1)
		return one.includes(two);
	else if (one.length + 1 === two.length)
		return two.includes(one);
	else
		return false;
}

console.log(oneaway('paxrk', 'park'));