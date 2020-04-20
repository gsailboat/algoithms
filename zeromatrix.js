var zeromatrix = function(m) {
	let index = [];
	// console.log(typeof(m));

	for (y = 0; y < m.length; y++) {
		console.log("here");
		for (x = 0; x < m[0].length; x++) {
			console.log("here");
			// console.log(m[y][x]);
			if (m[y][x] === 0)
				index.push([y, x]);
		}
	}
	for (i = 0; i < index.length; i++) {
		for (j = 0; m[index[i][0]][j]; j++)
		 m[index[i][0]][j] = 0;
		for (k = 0; m[k][index[i][1]]; k++)
		 m[k][index[i][1]] = 0;
	}
	return m;
}

console.log(zeromatrix([1,1,1],[1,0,1],[1,1,1]));