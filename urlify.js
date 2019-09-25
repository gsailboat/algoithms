var urlify = function(str) {
	let space = '%20';
	
	str = str.split('');
	while(str[0] === ' ') {
		str.shift();
	}
	while(str[str.length - 1] === ' ') {
		str.pop();
	}

	for (i = 0; i < str.length; i++) {
		if (str[i] === space && str[i + 1] === ' ') {
			while(str[i + 1] === ' ')
				str.splice(i + 1, 1);
		}
		else if (str[i] !== ' '  && str[i + 1] === ' ')
			str[i + 1] = space;
	}
	return str.join('');
}

console.log(urlify('    kdops      df     alssk '));