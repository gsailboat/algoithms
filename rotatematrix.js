// 3, 4, 5, 1
// 2, 3, 4, 5		
// 1, 3, 6, 3
// 3, 3, 4, 5

// 3, 1, 2, 3,
// 3, 3, 3, 4,
// 4, 6, 4, 5,
// 5, 3, 5, 1

var rotatematrix = function(flip) {
	let ans = [];
	let arr = [];
	for (x = 0; x < flip[0].length; x++) {
		for (y = flip.length - 1; y >= 0; y--) {
			arr.push(flip[y][x]);
		}
		ans.push(arr);
		arr = [];
	}
	return ans;
}

console.log(rotatematrix([[3, 4, 5, 1, 6], [2, 3, 4, 5, 0], [1, 3, 6, 3, 6], [3, 3, 4, 5, 7]]));