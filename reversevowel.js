var reverseVowels = function(s) {
    let vowels = "";
    let answer = "";
    let index = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        //console.log("aeiou".includes(s[i]));
        if ("aeiou".includes(s[i]))
            vowels += s[i];
    }
    //console.log(vowels);
    for (let i = 0; i < s.length; i++) {
        if ("aeiou".includes(s[i])) {
            answer += vowels[index];
            index++;
        }
        else
            answer += s[i];
    }
    return answer;
};

console.log(reverseVowels("striped"));