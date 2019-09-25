var findDisappearedNumbers = function(nums) {
    let arr = [];
    
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i))
            arr.push(i);
    }
    return arr;
};

console.log(findDisappearedNumbers([1, 1]));