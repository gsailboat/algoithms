var selfDividingNumbers = function(left, right) {
    var answer = [];
    
    for(var i = left; i <= right; i++) {
        var divide = i;
        
        while (divide > 0) {
        	console.log(divide);
            if (divide % 10 === 0 || i % (divide % 10) !== 0)
                break ;
            else
                divide = Math.floor(divide /= 10);
        }
        if (divide === 0)
            answer.push(i);
    }
    return answer;
};

console.log(selfDividingNumbers(1, 22));