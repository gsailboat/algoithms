var canConstruct = function(ransomNote, magazine) {
    if (!magazine)
        return true;
    if (magazine.length < ransomNote.length)
        return false;
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazine.indexOf(ransomNote[i])
        
        if (index === 0)
            magazine = magazine.substring(1);
        else if (index === -1)
            return false;
        else if (index === magazine.length - 1)
            magazine = magazine.substring(0, magazine.length - 1);
        else
            magazine = magazine.slice(0, index) + magazine.slice(index + 1);
    }
    return true;
};

console.log(canConstruct('a', 'ag'));