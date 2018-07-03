/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    moves.split();
    var position = [0, 0];
    
    for (var i = 0; i < moves.length; i++) {
        if(moves[i] === "U")
            position[1]++;
        else if (moves[i] === "D")
            position[1]--;
        else if (moves[i] === "L")
            position[0]--;
        else if (moves[i] === "R")
            position[0]++;
    }
    console.log(position);
    if (position[0] === 0 && position[1] === 0)
        return true;
    return false;
};

console.log(judgeCircle("UDLR"));