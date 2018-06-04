var rotate = function(nums, k) {
    var rotate = [];

    if (k > 0)
    	rotate = nums.slice(nums.length - (k % nums.length));
    else
    	rotate = nums.slice(0, -(k % nums.length));
    console.log(rotate);
    for (i = 0; i < rotate.length; i++)
    	k > 0 ? nums.pop() : nums.shift();
    k > 0 ? rotate = rotate.concat(nums) : rotate = nums.concat(rotate);
    console.log(rotate);
};

rotate([1,2,3,4,5,6,7], -2);