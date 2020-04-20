/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let m = nums.length - 1;
    
    while (l < m) {
        let mid = Math.floor((l + m) / 2);
        
        if (target === nums[mid])
            return mid;
        if (target > nums[mid])
            l = mid + 1;
        else
            m = mid - 1;
    }
    if (target > nums[l])
        return l + 1;
    return l;
};