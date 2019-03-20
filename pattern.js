/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	let words = str.split(' ');

    if (pattern.length !== words.length)
		return false;
	let helper = {};

	for (let i = 0; i < pattern.length; i++) {
		if (pattern[i] in helper && helper[pattern[i]] !== words[i])
			return false;
		else if (!(pattern[i] in helper) && Object.values(helper).includes(words[i])) {
			return false;
		}
		else if (!(pattern[i] in helper)){
			helper[pattern[i]] = words[i];
		}
	}
	return true;
};

console.log(wordPattern("abcb", "cat dog log cat"));