/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let keys = [].concat(rooms[0]);
    let visited = [0];
    
    while (keys[0]) {
        console.log("Here");
        if (!visited.includes(rooms[keys[0]])) {
            visited = visited.concat(keys[0]);
            keys = keys.concat(rooms[keys[0]]);
            keys = keys.filter(function(elem, pos) {
                return keys.indexOf(elem) == pos;
            });
            keys.shift();
        }
    }
    
    for (let z = 0; z < visited.length; z++) {
        if (!visited.includes(z))
            return false;
    }
    return true;
};

console.log(canVisitAllRooms([[1], [2], [3], [1], []]));