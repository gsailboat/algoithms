var middle = function(str) {
	if (str.length % 2 === 0)
		return str.substring(str.length / 2 - 1, str.length / 2 + 1);
	else
		return str[(str.length - 1) / 2];
}

console.log(middle(""));