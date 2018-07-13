var toGoatLatin = function(S) {
	var out = S.split(" ");
	const vowels = "aeiouAEIOU";

	for (var i = 0; i < out.length; i++) {
		if (vowels.indexOf(out[i][0]) < 0) {
			out[i] += out[i][0];
			out[i] = out[i].substring(1);
		}
		out[i] += "ma";
		a = i;
		while (a + 1 >= 1) {
			out[i] += 'a';
			a--;
		}
	}
	return (out.join(" "));
}

toGoatLatin("I speak Goat Latin");