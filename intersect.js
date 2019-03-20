/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let answer = [];
    let removed = [];
    
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            let index = nums2.indexOf(nums1[i]);
            console.log("index", index);
            
            answer.push(nums1[i]);
            //console.log("before", nums2.length)
            if (index === 0)
                nums2.shift();
            else if (index === nums2.length - 1)
                nums2.pop();
            else {
                console.log("before " + nums2)
                nums2.splice(index, 1);
                console.log("after  " + nums2)
            }
            //console.log("after", nums2.length);
        }
        else
            console.log("No", nums1[i], i);
    }
    return answer;
};

console.log(intersect([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31],
[5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52]))