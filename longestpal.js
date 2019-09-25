/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = {};
    let answer = 0;
    let largest = 0;
    console.log(s.length);
    s = s.toLowerCase();
    
    for (let letter of s) {
        count[letter] = ++count[letter] || 1;
        //console.log(count);
    }
    for (let key in count) {
        if (count[key] % 2 === 0)
            answer += count[key];
        else
            if (count[key] > largest) {
                answer -= largest 
                largest = count[key]
                answer += count[key]
            }
    }
    return answer;
};

console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'));