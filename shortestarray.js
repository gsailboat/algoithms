/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let most = nums.sort(function(a, b) {return a - b});
    let mode = [];
    let current = 1;
    let dup = 1;
    for (let i = 1; i < most.length; i++) {
        if (most[i] === most[i - 1])
            current++;
        else
            current = 1;
        if (current > dup) {
            dup = current;
            mode[0] = most[i];
            while (mode.length > 1)
                mode.pop();
        }
        else if (current === dup && most[i + 1] !== most[i])
            mode.push(most[i]);
    }
    current = 0;
    let a = 0;
    let firsti = 0;
    let answer = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === mode[a] && current === 0) {
            firsti = i;
            current++;
        }
        else if (nums[i] === mode[a] && current < dup -1)
            current++;
        else if (nums[i] === mode[a] && current === dup - 1)
        {
            answer = nums.slice(firsti, i + 1).length > answer ? nums.slice(firsti, i + 1).length : answer;
            a++;
            if (mode[a]) {
                current = 0;
                i = -1;
                firsti = 0;
        }
    }
    return answer;
};

console.log(findShortestSubArray([2, 3, 2, 2, 5, 2]));