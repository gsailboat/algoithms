var islandPerimeter = function(grid) {
    let answer = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (grid[i][j - 1] === 0 || grid[i][j - 1] === undefined)
                    answer++;
                if (i - 1 < 0 || grid[i - 1][j] === 0)
                    answer++;
                if (grid[i][j + 1] === 0 || grid[i][j + 1] === undefined)
                    answer++;
                if (i + 1 >= grid.length || grid[i + 1][j] === 0)
                    answer++;
            }
        }
    }
    return answer;
};