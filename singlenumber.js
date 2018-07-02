var singleNumber = function(nums) {
    var b = 0;
    
    for (a = 0; a <= nums.length - 1; a++) {
        a === 0 ? b = 1 : b = 0;
        while (nums[a] != nums[b] && b <= nums.length - 1) {
            b++;
            a === b ? b++ : b;
        }
        if (nums[a] != nums[b])
            return nums[a];
    }
    return 0;
};