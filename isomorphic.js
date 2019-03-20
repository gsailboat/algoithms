var isIsomorphic = function(s, t) {
	if (s.length !== t.length)
		return false;
	let same = {};

	for (let i = 0; i < s.length; i++) {
		if (s[i] in same && same[s[i]] !== t[i])
			return false;
		if (!(s[i] in same) && Object.values(same).includes(t[i]))
			return false;
		if (!(s[i] in same))
			same[s[i]] = t[i];
	}
	return true;
}

console.log(isIsomorphic(faft, lils));