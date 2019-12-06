//GOOD
//O(n)

function duplicateNums(arr) {
	let answer = new Set();

	for (let i = 0; i < arr.length; i++) {
		if (Number.isInteger(arr[i]))
			answer.add(arr[i]);
	}
	answer = Array.from(answer);
	return answer;
}

//BAD
// O(arr * answer)
// function duplicateNums(arr) {
// 	let answer = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (Number.isInteger(arr[i]) && !answer.includes(arr[i]))
// 			answer.push(arr[i]);
// 	}
// 	// answer = Array.from(answer);
// 	return answer;
// }

console.log(duplicateNums(["18",10,1,4,5,6,6,6,6,7,19,19,-19,"lol","!"]));
