function completedBracket(str) {
	let ob = [];
	let ans = '';

	for (let i = 0; i < str.length; i++)  {
		// console.log(ob);
		if (str[i] === '(')
			ob.push(i);
		else if (str[i] === ')' && ob.length > 0) {
			ans = '(' + ans;
			ans += ')';
			ob.shift();
		}
		else if (str[i] !== ')')
			ans += str[i];
	}
	return ans;
}

console.log(completedBracket('(a(b)a)(a'))