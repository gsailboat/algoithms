// first bad commit
// linear is bad

//needs sorted or predictable
//linear faster? faster than linear and SEARCH
//CONSTANT OR BINARY for faster than linear

// var firstBad = function(arr) {
// 	let l = 0;
// 	let m = arr.length - 1;

// 	while (l <= m) {
// 		let mid = Math.floor((l + m) / 2);

// 		if (mid === 'B' && mid - 1 === 'G')
// 			return mid;
// 		if (mid )
// 	}
// }

var addup = function(arr, target) {
	let answer = [];

	for (a = 0; a < arr.length - 1; a++) {
		for (b = 1; b < arr.length; b++) {
			answer.push(arr[a] + arr[b]);
		}
	}
	answer = answer.concat(arr, answer);
	console.log(answer, target);
	// for (i = 0; i < arr.length; i++) {
	// 	if (target % arr[i]) {
	// 		// while (answer.reduce()) {
	// 			answer.push(arr[i]);
	// 		}
	// 	}
		// return arr;
	}
	// return answer; 

var findClosest = function(arr, target) {
	let l = 0;
	let m = arr.length - 1;

	while (l <= m) {
		let mid = Math.floor((l + m) / 2);
		console.log(mid, l, m);

		if (arr[mid] === target) {
			return mid
		}
		if (arr[mid] < target)
			l = mid + 1;
		else
			m = mid - 1;
	}
	if ((m - target) > (target - l))
		return l;
	return m;
}

addup([2,3,5], 8);

// console.log(findClosest([3,4,5,7,9], 6))