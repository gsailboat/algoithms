var climbStairs = function(n) {
    var first = 0;
    var second = 1;
    
    for (i = 1; i <= n; i++) {
        var temp = second;
        second += first;
        first = temp;
    }
    console.log(second);
};

climbStairs(9);