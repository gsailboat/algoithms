/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
    let alphabet = [...new Set(wordList.join(""))];
    if (!wordList.includes(endWord))
        return 0;
    if (beginWord.length !== endWord.length)
        return Infinity;
    let queue = [beginWord];
    let distance = 1;
    let visit = new Set(wordList);
    
    visit.delete(beginWord);
    visit.add(endWord);
    
    while (queue.length !== 0) {
        for (let i = 0; i < queue.length; i++) {
            let next = queue.shift();
            
            for (let neighbor of generateNeighbors(next, alphabet, wordList)) {
                if (neighbor === end)
                    return distance;
                queue.push(neighbor);
                visit.delete(neighbor);
            }
        }
        distance++;
    }
    return Infinity;
};

function* generateNeighbors(word, alphabet, visit) {
    let chars = word.split("");
    
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        
        for (let j = 0; j < alphabet.length; j++) {
            chars[i] = alphabet[j];
            let neighbor = chars.join("");
            if (visit.has(neighbor));
                yield neighbor;
        }
        chars[i] = char;
    }
}

