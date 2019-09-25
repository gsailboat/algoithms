DECREMENTING FOR LOOP
var reverse = function(x) {
    var str = x.toString();
    var rev = "";
    
    for (i = str.length - 1; str[0] === "-" ? i >= 1 : i >= 0; i--)
        rev += str[i];
    rev = parseInt(rev, 10);
    if (x < 0)
        rev *= -1;
    console.log(rev > (Math.pow(2, 31) - 1) || rev < -(Math.pow(2, 31)) ? 0 : rev);
};

// WITH BUILT-IN FUNCTIONS
// var reverse = function(x) {
// 	var answer = x < 0 ? x.toString().substring(1) : x.toString();

// 	answer = answer.split("").reverse().join("");
// 	answer = parseInt(answer, 10);
// 	x < 0 ? answer *= -1 : answer;
// 	console.log(answer > (Math.pow(2, 31)) - 1 || answer < -(Math.pow(2, 31)) ? 0 : answer);
// };

//RECURSION
// var rev = 0;

// var reverse = function(x) {
// 	if (rev > (Math.pow(2, 31)) - 1 || rev < -(Math.pow(2, 31)))
// 		console.log(0);
// 	else if (x >= 1 || x <= -1) {
// 		var remain = x % 10;

// 		rev = (rev * 10) + remain;
// 		return(reverse((x - remain) / 10));
// 	}
// 	else
// 		console.log(rev);
// };

reverse(-123);