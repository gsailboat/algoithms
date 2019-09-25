/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let split = s.split('');
    console.log(split);
    let answer = 0;
    
    for (let i = 0; i < split.length; i++) {
        console.log(split[i]);
        if (split[i] === 'M')
            answer += 1000;
        else if (split[i] === 'D')
            answer += 500;
        else if (split[i] === 'C') {
            if (split[i + 1] === 'M') {
                answer += 900;
                i++;
            }
            else if (split[i + 1] === 'D') {
                answer += 400;
                i++;
            }
            else
                answer += 100;
        }
        else if (split[i] === 'L') {
            answer += 50;
        }
        else if (split[i] === 'X') {
            if (split[i + 1] === 'C') {
                answer += 90;
                i++;
            }
            else if (split[i + 1] === 'L') {
                answer += 40;
                i++;
            }
            else
                answer += 10;
        }
        else if (split[i] === 'V')
            answer += 5;
        else {
            if (split[i + 1] === 'X') {
                answer += 9;
                i++;
            }
            else if (split[i + 1] === 'V') {
                answer += 4;
                i++;
            }
            else
                answer += 1;
        }
    }
    return answer;
};

console.log(romanToInt('MCMIV'));