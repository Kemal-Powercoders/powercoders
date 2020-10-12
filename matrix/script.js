var matrix = [["A","B","C"],["D","E"]];
function transpose (matrix){
    let results = [];
    for (i=0; i<matrix.length; i++){
        for(j=0; j<matrix[i].length; j++){
            if (!results[j]){
                results[j]=[];
            }
            results[j][i] = matrix[i][j];
        }
    }
    return results
}
 console.log(transpose(matrix))