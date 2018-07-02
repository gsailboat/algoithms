var palinperm = function(string) {
	string = string.replace(/\s/g, "").toLowerCase();
	var odd = 0;
	var length = string.length;

	while(string[0]) {
		var ch = string[0];
		
		
		console.log(string);
	}
	if (string.length % 2 !== 0 && odd > 1)
		return false;
	if (string.length % 2 === 0 && odd > 0)
		return false;
	return true;
}

palinperm("alabl")