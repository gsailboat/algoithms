var findTheDifference = function(s, t) {
	var first = s;

    for (var i = 0; i < t.length; i++) {
    	var index = first.indexOf(t[i]);
    	
        if (index > 0)
            first = first.slice(0, index) + first.slice(index + 1);
        else if (index === 0)
        	first = first.substring(1);
        else
        	return t[i];
    }
}

console.log(findTheDifference("abb", "babl"));

