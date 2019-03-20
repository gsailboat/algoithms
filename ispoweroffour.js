var isPowerOfFour = function(num) {
    let test = 4;
    if (num === 1)
        return true;
    while (test <= num) {
        if (test === num)
            return true;
        test *= 4;
    }
    return false;
};

console.log(isPowerOfFour(67));