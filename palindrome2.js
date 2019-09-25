var validPalindrome = function(s) {
    let once = false;
    let b = 1;

    for (let i = 0; i < Math.ceil(s.length) / 2; i++) {
        if (s[i] !== s[s.length - b - i]) {
            if (s[i + 1] === s[s.length - b - i] && !once) {
                i++;
                b--;
                once = true;
            }
            else if (s[i] === s[s.length - 2 - i] && !once) {
                b++;
                once = true;
            }
            else
                return false;
        }
    }
    return true;
};

console.log(validPalindrome("deeeee"));