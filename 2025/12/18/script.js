function createBoard(dimensions) {
    let matrix = [];
    for (let r = 0; r < dimensions[0]; r++) {
        matrix[r] = [];
        for (let c = 0; c < dimensions[1]; c++) {
            if (c % 2 == 0) matrix[r].push(r % 2 == 0 ? "X" : "O");
            else matrix[r].push(r % 2 == 0 ? "O" : "X");
        }
    }

    return matrix;
}

module.exports = createBoard;
