var maxUncrossedLines = function(A, B) {
    // let ar=new Array(A.length+1);
    // console.log("1", ar)
    let ar = new Array(A.length + 1);
    for(let i = 0; i <= A.length; i++)
        ar[i]=(new Array(B.length)).fill(0);
    console.log("2", ar);
    // console.log("2", ar)
    for(let i = 1; i <= A.length; i++){
        for(let j = 1; j <= B.length; j++){
            console.log(A[i], B[j])
            if(A[i - 1] === B[j - 1]){
                console.log("here");
                ar[i][j] = 1 + ar[i - 1][j - 1];
            }
            else{
                ar[i][j] = Math.max(ar[i][j - 1], ar[i - 1][j]);
            }
            // console.log(ar);
        }
    }
    return ar[A.length][B.length];
};

console.log("answer", maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2]));