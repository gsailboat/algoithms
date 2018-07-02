var spacechange = function(string, length) {
	string = string.slice(0, length);
	string = string.replace(/ /g, "%20");
	console.log(string);
}

spacechange("Cooper ddd dd dd", 11);