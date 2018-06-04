var similar = function(strone, strtwo) {
	while(strtwo[0]) {
		if (strone.length !== strtwo.length || !strone.includes(strone[0])) {
			console.log("No")
			return false;
		}
		else {
			var index = strone.indexOf(strtwo[0]);
			console.log(index);

			strtwo = strtwo.substr(1);
			if (index === 0)
				strone = strone.substr(1);
			else if (index === index.length - 1)
				strone = strone.slice(0, -1);
			else
				strone = strone.slice(0, index) + strone.slice(index + 1);
		}
	}
	console.log("Yes");
	return true;
}

similar("robe", "bobe");