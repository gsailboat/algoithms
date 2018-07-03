var reverseit = function(string) {
	var split = string.split(" ");
	var rev = "";
	console.log(split);

	for (var i = 0; i < split.length; i++) {
		for (var a = split[i].length - 1; a >= 0; a--) {
			rev += split[i][a];
		}
		split[i] = rev;
		rev = "";
	}
	console.log(split.join(" "));
	return split.join(" ");
}

reverseit("Let's take LeetCode contest");