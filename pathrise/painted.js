function painted(colors) {
    let sum = 0;
    
    for (i = 0; i < colors.length; i++) {
        let least = colors[i][0];
        
        for (j = 1; j < colors[i].length; j++) {
            if (colors[i][j] < least)
                least = colors[i][j];
        }
        sum += least;
    }
    return sum;
}