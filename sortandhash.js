//duplicates brute force n^2
// var brute = function(arr) {
// 	for (i = 0; i < arr.length; i++) {
// 		for (j = 0; A[j] != A[i]) ...
// 	}
// }

//sort O(n) + O(n log n) ==== O(n log n)
var sorted = function(arr) {
	arr.sort(function(a, b) {return a-b});
	for (i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1])
			return true
	}
	return false;
}

//hashtables
/** hash tables vs. arrays
hash tables -> key, value
hash table search O(1); GREAT FOR SEARCHING
Takes a lot of space (not great space complexity)
No order ()
**/

// Given an array of integers, find a pair of integers that sums to a number X.

// For e.g, if A = [6,3,5,2,1,7]. X = 4, Result= [3,1]

// We recommend solving this with HashTable/HashSet first. In later sections we solve this using Sorting.

var hashtables = function(in) {
	let table = {};

	for (let i = 0; i < in.length; i++) {
		if ()
	}
}