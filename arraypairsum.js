var arrayPairSum = function(nums) {
    //nums.sort(function(a, b){return a - b});
    nums.sort();
    let answer = 0;
    for (let i = 0; i < nums.length; i + 2) {
        answer += nums[i]
    }
    return answer
};

console.log(arrayPairSum(4,5,3,2,1,2));