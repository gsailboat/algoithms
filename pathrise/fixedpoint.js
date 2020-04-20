function isFixed(n, i) {
	if (n === i)
		return i;
	else
		return -1;// console.log(n);
}

function fixedPoint(arr) {
	let l = 0;
	let r = arr.length - 1;
	let fixed = -1;

	while (l <= r) {
		let mid = Math.floor((l + r) / 2);

		if (isFixed(arr[mid], mid) >= 0) {
			fixed = isFixed(arr[mid], mid);
			r = mid - 1;
		}
		else if (arr[mid] < mid)
			l = mid + 1;
		else
			r = mid - 1;
	}
	if (arr[l] === l)
		return l;
	if (arr[r] === r)
		return r;
	return fixed;
}

console.log(fixedPoint([0, 1, 2]));