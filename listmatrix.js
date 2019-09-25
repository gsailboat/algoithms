var listmatrix = function(x,y,z,n) {
	let answer = []
	for (let a = 0; a <= x; a++) {
		for (let b = 0; b <= y; b++) {
			for (let c = 0; c <= z; c++) {
				if (a + b + c !== n) {
					answer.push([a, b, c]);
				}
			}
		}
	}
	console.log(answer);
}

listmatrix(2,2,2,2);