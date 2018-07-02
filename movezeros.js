var moveZeros = function(nums) {
	for (var i = nums.length; i >= 0; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		}
	}
	console.log(nums);
}

moveZeros([9, 0, 8, 0, 9]);
moveZeros([2, 0, 0, 0, 3, 0]);