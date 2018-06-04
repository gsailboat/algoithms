var stringify = function(array) {
	var mem = {};

	for (var i = 0; i < array.length; i++) {
		var string = array[i].toString();

		if (mem[string])
			mem[string]++;
		else
			mem[string] = 1;
	}
	var keys = Object.keys(mem).filter(key => mem[key] >= 2);
	keys.sort();
	var dog = keys.join(" ");
	// console.log(mem);
	// console.log(keys);
	console.log(dog);
	return (dog);
}

stringify([3,3,3,4,4,4]);