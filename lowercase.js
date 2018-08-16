var toLowerCase = function(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
			str.replaceAt(i, str.fromCharCode(str.charCodeAt(i) + 32));
	}
	return str;
}

console.log(toLowerCase("HeLlO"));