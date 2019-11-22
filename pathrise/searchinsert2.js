function searchInsert(nums, target) {
    // Write your code here
    let l = 0;
    let m = nums.length;

    while (l <= m) {
        let mid = Math.floor((l + m) / 2);

        if (nums[mid] === target)
            return mid;
        if (nums[mid] < target)
            l = mid + 1;
        else
            m = mid - 1;
    }
    return l;
}

console.log(searchInsert([1,2,3,4,6], 5));