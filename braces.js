function braces(values) {
    let answer = [];

    for (let i = 0; i < values.length; i++) {
        let stack = [];
        let current = '';

        for (let j = 0; j < values[i].length; j++) {
            if (values[i][j] === '[' || values[i][j] === '(' || values[i][j] === '{')
                stack.push(values[i][j]);
            else {
                let length = stack.length;

                if (values[i][j] === ']' && stack[stack.length - 1] === '[')
                    stack.pop();
                else if (values[i][j] === '}' && stack[stack.length - 1] === '{')
                    stack.pop();
                else if (values[i][j] === ')' && stack[stack.length - 1] === '(')
                    stack.pop();
                if (length === stack.length){
                    current = ('NO');
                    break;
                }
            }
        }
        if (!current) {
            if (stack.length === 0)
                current = 'YES';
            else
                current = 'NO';
        }
        answer.push(current);
    }
    return answer;
}

console.log(braces(['{}[]()','[{]}']));
// console.log(braces('[{]}'));