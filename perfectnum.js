var checkPerfectNumber = function(num) {
    if (num < 1)
        return false;
    let sum = 1;
    
    for (let n = 2; n <= Math.floor(num / 2); n++) {
        if (num % n === 0) {
            sum += n;
        }
    }
    if (sum === num)
        return true;
    return false;
};

console.log(checkPerfectNumber(28));