var findKthLargest = function(nums, k) {
    let places = [];
    
    for (let i = 0; i < nums.length; i++) {
        if(!places.includes(nums[i])) {
            places.push(nums[i]);
        }
        console.log(places);
    }
    //console.log(places);
    places.sort((a, b) => b - a);
    console.log(places);
    return places[k - 1];
};

console.log(findKthLargest([3,2,1,5,6,4], 2));
