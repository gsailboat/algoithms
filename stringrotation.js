var strrotation = function(s1, s2) {
	if (s2.length > s1.length)
		return false;
	let word = "";

	for (i = s2.length - 1; i >= 0; i--)
		word += s2[i];
	return s1.includes(word);
}

console.log(strrotation("looper", "repoo"));