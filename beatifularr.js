var beautifulArray = function(N) {
    let arr = Array.from({length:N}, (x, i) => i + 1);
    return helper(arr);

    function helper(arr){
        console.log(arr);
    	if(arr.length === 1)
            return arr;
    	let odd = [], even = [];
    	for (let i = 0; i < arr.length; i++) {
    		if(i % 2 === 0)
                even.push(arr[i]);
    		else 
                odd.push(arr[i]);
    	}
    	return helper(even).concat(helper(odd));
    }
};

console.log(beautifulArray(10));