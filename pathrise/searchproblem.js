var isMatch = function(word, query) {
	if (word.length !== query.length)
		return false;
	for (i in word) {
		if (w[i] !== query[i] && query[i] !== '*')
			return false;
	}
	return true;
}

var check = function(words, query) {
	for (w in words) {
		if (isMatch(w, query))
			return true;
	}
	return false;
}

/*
skip this
find, look, search (AKA search problems)
1. sorting and searching - binary search -- alphabetical half and half etc. (.)
2. can you get it down to constant -- dict
	# clarifying questions
3. tries -- binary search tree, tries (prefix tree)
	# . loop through all children
*/

// var setup = function()