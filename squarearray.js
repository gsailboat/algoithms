var numSquarefulPerms = function(A) {
    // key a of A, value: number of a
    let map = {};
    let graph = {}; 
    A.forEach(a => {
        map[a] = ~~map[a] + 1;
        A.forEach(b => {
            if(Math.sqrt(a + b) % 1 === 0) {
                if(a in graph)
                    graph[a].add(b);
                else {
                    graph[a] = new Set();
                    graph[a].add(b);
                }
            }
        })
    });
    let res = 0;
    var dfs = function(p, remain) {
        //console.log(typeof(p));
        // console.log(remain);
        if(remain === 0) {
            res++;
            return;
        }
        if(graph[p]) {
            graph[p].forEach(q => {
                if(map[q] > 0) {
                    map[q]--;
                    dfs(q, remain - 1);
                    console.log(1);
                    map[q]++;
                }
            })
        }
    }
    Object.keys(graph).forEach(start => {
        // console.log("MAP OF START", map[start]);
        map[start]--;
        dfs(start, A.length - 1);
        map[start]++;
    })
    
    return res;
};

console.log(numSquarefulPerms([1, 17, 8]));