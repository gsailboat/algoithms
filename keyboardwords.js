var findWords = function(words) {
	var lower = [];
    const key = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    var answer = [];
    
    for (var j = 0; j < words.length; j++) {
        lower.push(words[j].toLowerCase());
    };
    for (var i = 0; i < lower.length; i++) {
        var line = 0;
        
        if(key[1].indexOf(lower[i][0]) >= 0)
            line = 1;
        else if (key[2].indexOf(lower[i][0]) >= 0)
            line = 2;
        for (var a = 1; a < lower[i].length; a++) {
            if (key[line].indexOf(lower[i][a]) < 0)
                break ;
        };
        if (a === lower[i].length)
            answer.push(words[i]);
    };
    console.log(answer);
    return answer;
}

findWords(["Dad", "America", "Alaska", "Pop", "retro", "mom"]);