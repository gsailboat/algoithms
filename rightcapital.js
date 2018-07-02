var rightCapital = function(word) {
	
    // if (word.titleize === word)
    //     return true;
    var first = word[0];
    //console.log(first.charCodeAt(0));
    
    for (var i = 1; i < word.length; i++) {
        if (first.charCodeAt(0) >= 65 && first.charCodeAt(0) <= 90) {
        	//console.log("here")
            
            if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122 && i === 1)
            	first = word[1];
            else if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90)
                return false;
        }
        else if (first.charCodeAt(0) >= 97 && first.charCodeAt(0) <= 122) {
        	//console.log("here2")
        	//console.log(word.charCodeAt(i));
            if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122)
                return false;
        }
        else
            return false;
    }
    return true;
};

console.log(rightCapital("Leetcode"));