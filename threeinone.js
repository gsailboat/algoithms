var threeinone = function(array) {
	// let nlength = array / 3;
	let one = [];
	let two = [];
	let three = [];
	// one = two = three = [];
	// let a;
	for (let i = 0; i < array.length; i++) {
		if (i < array.length / 3)
			one.push(array[i]);
		else if (i >= 2 * array.length / 3)
			three.push(array[i]);
		else
			two.push(array[i]);
	}

	return [one, two, three];

	// for (a = 0; a <= nlength; a++) {
	// 	console.log(a);
	// 	one.push(array[a])
	// }
	// nlength *= 2;
	// for (a; a <= nlength; a++) {
	// 	two.push(array[a]);
	// }
	// for (a; a < array.length; a++) {
	// 	three.push(array[a]);
	// }
	// return [one, two, three];
}

console.log(threeinone([1,2,3,4,5]));