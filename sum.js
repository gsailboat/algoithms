var getSum = function(a, b) {
    let sum = a;
    if (b === 0)
    	return a;
    for (let i = 0; b < 0 ? i > b : i < b; b < 0 ? i-- : i++) {
        b < 0 ? sum -= 1 : sum += 1;
    }
    return sum;
};

console.log("answer", getSum(-12, -8));