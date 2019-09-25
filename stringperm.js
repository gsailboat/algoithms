var stringPerm = function(a, b) {
	if (a.length !== b.length)
		return false;
	return a.split('').sort().toString() === b.split('').sort().toString();
}

console.log(stringPerm("plop", "lppo"));