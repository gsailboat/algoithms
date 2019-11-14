var twosum = function(arr, ans) {
	let set = new Set([]);

	if (arr === null)
		return null;

	for (let i = 0; i < arr.length; i++) {
		if (set.has(ans - arr[i])) {
			return [ans - arr[i], arr[i]];
		}
		else
			set.add(arr[i])
	}
	console.log(set);
	return null;
}

console.log(twosum([2,3,5,7,8,2], 13));