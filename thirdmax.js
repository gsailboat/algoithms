var thirdMax = function(nums) {
    let places = [];
    
    for (let i = 0; i < nums.length; i++) {
        // console.log(places.includes(nums[i]));
        if (!places.includes(nums[i])) {
            if (!places[0])
                places[0] = nums[i];
            else if (nums[i] > places[0]) {
                if (places[1])
                    places[2] = places[1];
                places[1] = places[0]
                places[0] = nums[i];
            }
            else if (nums[i] > places[1] || !places[1]) {
                places[2] = places[1];
                places[1] = nums[i];
            }
            else if (nums[i] > places[2] || !places[2])
                places[2] = nums[i];
        }
    }
    console.log(places);
    if (typeof places[2] !== 'undefined');
        return places[2];
    return places[0];
};

console.log(thirdMax([3,3,4,3,4,3,0,3,3]));