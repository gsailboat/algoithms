var subarray = function(array) {
	var subarrays = [];

	for (var i = array.length; i > 0; i--) {
		var b = i;

		for (var a = 0; i + a <= array.length; a++) {
			var sub = [];

			sub = array.slice(a, b);
			if (b < array.length)
				b++;
			subarrays.push(sub);
		}
	}
	var largest = 0;
	var asum = 0;

	for (var z = 0; z < subarrays.length; z++) {
		for (var y = 0; y < subarrays[z].length; y++) {
			if (y === 0)
				asum = 0;
			asum += subarrays[z][y];
		}
		if (asum > largest)
			largest = asum;
	}
	console.log(largest);
	return largest;
}

subarray([-1, 2, 1]);
console.log("answer is 3");
subarray([5, 6, 3, 5, -3]);
console.log("answer is 19");
subarray([4, -3, -4, 5]);
console.log("answer is 2");
subarray([-5, -4, -3, -5, -5]);
console.log("answer is 0");
subarrray([100, -33, 55, 22, 11, -33]);
console.log