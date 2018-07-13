var rotateString = function(A, B) {
    if (A === B)
        return true;
    for (var i = 1; i < A.length; i++) {
        var shifted = "";
        
        if (i === 1) {
            shifted = A + A[0];
            shifted = shifted.substring(1);
        }
        else
            shifted = A.substring(i) + A.substring(0, i);
        if (shifted === B)
            return true;
    }
    return false;
};

console.log(rotateString("abcde", "cdeab"));