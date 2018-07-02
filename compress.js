var compress = function(chars) {
    var number = 0;
    var counter = 1;
    
    for (var i = 0; i <= chars.length; i++) {
        if (i === 0 || chars[i] !== chars[i - 1]) {
            if (chars[i])
                number++;
            if (counter > 1) {
                if (counter < 10)
                    number++;
                else if (counter >= 10 && counter < 100)
                    number += 2;
                else if (counter >= 100 && counter < 1000)
                    number += 3;
                else
                    number+= 4;
                counter = 1;
            }
        }
        else if(chars[i] === chars[i - 1])
            counter++;
        
    }
    console.log(number);
    return number;
}

compress(["a","a","b","b","c","c","c"]);