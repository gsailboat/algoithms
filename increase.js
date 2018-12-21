var increment = function(s) {
	const temp =[];
	let min = 0;
	let max = s.length;
	for (var i = 0; i < s.length; i++) {
		if (s[i] === 'I') {
			temp.push(min);
			min++
		}
		else {
			temp.push(max);
			max--;
		}
	}
	temp.push(min);
	return temp;
};

console.log(increment("IIDIDD"));