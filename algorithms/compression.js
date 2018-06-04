var compression = function(chars) {
	var answer = [];
	var repeat = 0;

	for (i = 0; i <= chars.length; i++) {
		if (i === 0 || chars[i] != chars[i - 1]) {
			var number = [];

			repeat > 0 ? number = repeat.toString().split("") : repeat;
			answer = answer.concat(number);
			chars[i] != undefined ? answer.push(chars[i]) : chars[i];
			repeat = 0;
		}
		else
			//console.log("here");
			repeat === 0 ? repeat = 2 : repeat++;
	}
	console.log(answer);
}

compression(["a", "a", "b", "b", "c"]);