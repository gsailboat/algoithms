// when to iterate backwards

//a little more difficult if C or Java (malloc ahead of time before filling in)

var doubleeven = function(arr) {
	//if we can return a new array
	// let answer = [];

	// for (i = 0; i < arr.length; i++) {
	// 	if (arr[i] % 2 === 0)
	// 		answer.push(arr[i]);
	// 	answer.push(arr[i]);
	// }

	// return answer;
	//if we need to return a modified original array with
	//space given for extra values
	if (arr === null)
		return null;
	let end = arr.length - 1;

	for (i = arr.length - 1; i >= 0; i--) {
		if (arr[i] >= 0) {
			if (arr[i] % 2 === 0) {
				arr[end] = arr[i];
				end--;
			}
			arr[end] = arr[i];
			end--;
		}
	}
	return arr;
}

//Traverse from both ends
// reverse elements
let reverse = function(arr) {
	for (i = 0; i < arr.length / 2; i++) {
		temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

//Partitioning Arrays
//move all zeroes to the beginning of an array
let beginningzeroes = function(arr) {
	let boundary = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			let temp = arr[boundary];

			arr[boundary] = 0;
			arr[i] = temp;
			boundary++;
		}
	}
	return arr;
}

//move all zeroes to the end of the array
let endzeroes = function(arr) {
	let boundary = arr.length - 1;

	for (i = arr.length; i >= 0; i--) {
		if (arr[i] === 0) {
			let temp = arr[boundary];

			arr[boundary] = 0;
			arr[i] = temp;
			boundary--;
		}
	}
	return arr;
}

//dutch national flag
//pivot

let pivot = function(arr, pivot) {
	let low = 0;
	let high = arr.length - 1;
	let i = 0;
	// let lowsize = 0;
	while (i <= high) {
		let t = arr[i];

		if (arr[i] < pivot) {
			arr[i] = arr[low];
			arr[low] = t;
			low++;
		}
		else if (arr[i] > pivot) {
			arr[i] = arr[high];
			arr[high] = t;
			high--;
		}
		else
			i++;
	}
	return arr;
}

console.log(pivot([1, 4, 5, 4, 4, 6, 2, 3], 4));
console.log(beginningzeroes([1, 0, 9, 8, 0]));
console.log(endzeroes([1, 0, 9, 8, 0, 3, 3, 4]));
console.log(doubleeven([1,2,3,4,5,6, -1, -1, -1]));
console.log(reverse([2,3,4,4,4,5]));