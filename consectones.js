var findMaxConsecutiveOnes = function(nums) {
	var max = 0;
	var current = 0;

	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === 1)
			current++;
		else
			current = 0;
		if (current > max)
			max = current;
	}
	return max;
}

findMaxConsecutiveOnes([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0])