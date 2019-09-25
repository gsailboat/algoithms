/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let change = [0, 0, 0];
    
    for (let i = 0; i < bills.length; i++) {
        //console.log(bills[i]);
        if (bills[i] === 5)
            change[0] += 1;
        else if (bills[i] === 10) {
            change[1]++;
            change[0]--;
        }
        else if (bills[i] === 20) {
            if (change[1] <= 0)
                change[0] -= 3;
            else {
                change[1]--;
                change[0]--;
            }
            change[2]++;
        }
        console.log(change);
        if (change[0] < 0) {
            console.log(change);
            return false;
        }
    }
    return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));