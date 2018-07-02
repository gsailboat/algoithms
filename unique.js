var unique = function(string) {
	var used = "";
	console.log(string);

	for (var i = 0; i < string.length; i++) {
		
		if (used.includes(string[i]) && used !== "") {
			console.log("No");
			//console.log(used);
			return false;
		}
		else {
			//console.log("Here");
			used += (string[i]);
			//console.log(used);
		}
	}
	console.log("Yes");
	return true;
}

unique("rare");