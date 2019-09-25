/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A.sort(function(a, b) {return a - b});
    //let answer = 1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === A[i + 1])
            return A[i];
    }
    return A;
};

console.log(repeatedNTimes([4, 4, 2, 1, 22]));