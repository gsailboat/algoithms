var divide = function(dividend, divisor) {
    var remain = 0;
    
    
    for (i = 1; remain + Math.abs(divisor) < Math.abs(dividend) - Math.abs(divisor); i++) {
        remain += Math.abs(divisor);
        console.log(i);
    }
    remain > Math.abs(dividend) ? i =- 1 : i;
    console.log(remain);
    console.log(i);
    (dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0) ? i *= -1: i;
    i > Math.pow(2, 31) - 1 || i < -(Math.pow(2, 31)) ? i = Math.pow(2, 31) - 1 : i;
    console.log(i);
};

divide(10, 3);