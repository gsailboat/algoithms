var palinperm = function(string) {
	string = string.replace(/\s/g, "").toLowerCase();
	console.log(string);
	var used = [];
	var length = string.length;
	var odd = 0;
	//var one = 0;


	while(string) {
		string = string.split(string[0]);
		used.push(string.length - 1);
		string = string.join("");
		console.log(string);
		console.log(used);
	}
	for (var i = 0; i < used.length; i++) {
		if (used[i] % 2 != 0) {
			odd++;
		}
	}
	console.log(odd);
	if ((odd >= 1 && length % 2 === 0) || (odd > 1 && length % 2 !== 0)) {
		console.log("no");
		return false;
	}
	else {
		console.log("yes");
		return true;
	}
}

palinperm("jjjaaarrr");