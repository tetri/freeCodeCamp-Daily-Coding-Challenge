function gameOfLife(board) {
    const rows = board.length;
    const cols = board[0].length;

    const nextBoard = new Array(rows)
        .fill(0)
        .map(() => new Array(cols).fill(0));

    function countLiveNeighbors(row, col) {
        let count = 0;

        const directions = [
            [-1, -1],
            [-1, 0],
            [-1, 1], // top row
            [0, -1],
            [0, 1], // same row
            [1, -1],
            [1, 0],
            [1, 1], // bottom row
        ];

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                count += board[newRow][newCol];
            }
        }

        return count;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const currentCell = board[i][j];
            const liveNeighbors = countLiveNeighbors(i, j);

            if (currentCell === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    nextBoard[i][j] = 0;
                } else {
                    nextBoard[i][j] = 1;
                }
            } else {
                if (liveNeighbors === 3) {
                    nextBoard[i][j] = 1;
                } else {
                    nextBoard[i][j] = 0;
                }
            }
        }
    }

    return nextBoard;
}

module.exports = gameOfLife;
