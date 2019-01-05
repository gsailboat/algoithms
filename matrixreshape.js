var matrixReshape = function(nums, r, c) {
	let arr = [];

	for (let a = 0; a < nums.length; a++) {
		for (let b = 0; nums[a][b] !== undefined; b++) {
			console.log(nums[a][b]);
			arr.push(nums[a][b]);
		}
	}
	console.log(arr);
	if (r * c !== arr.length)
		return nums;
	a = 0;
	let answer = [];
	for (let i = 0; i < r; i++) {
		answer.push(arr.slice(a, a + c))
		a += c;
	}
	return answer;
}

console.log(matrixReshape([[2,5],[8,4],[0, -1]], 6, 1));