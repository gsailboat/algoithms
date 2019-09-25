var coinChange = function(coins, amount) {
    var changes = [];
    changes[0] = 0;
    
    while(changes.length <= amount){
        var curr = Math.pow(2, 31) - 1;
        for (var i = 0; i < coins.length; i++) {
            if (changes.length - coins[i] < 0)
                // 11 - 5 = current[6] = 2 + 1
                // 11 - 3 = current[8] = 2 + 1 
                continue;
            curr = Math.min(curr, 1 + changes[changes.length - coins[i]]);
        }
        changes.push(curr);
        console.log(changes);
    }
    return changes[amount] == Math.pow(2, 31) - 1 ? -1 : changes[amount];
};

console.log(coinChange([3, 5], 12))