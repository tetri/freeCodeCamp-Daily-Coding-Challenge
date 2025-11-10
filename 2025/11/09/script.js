function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const wordLength = word.length;

  const directions = [
    [0, 1], // direita
    [0, -1], // esquerda
    [1, 0], // baixo
    [-1, 0], // cima
    //[1, 1], // diagonal inferior direita
    //[1, -1], // diagonal inferior esquerda
    //[-1, 1], // diagonal superior direita
    //[-1, -1], // diagonal superior esquerda
  ];

  function isValid(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }

  function searchFrom(x, y, dx, dy) {
    for (let i = 0; i < wordLength; i++) {
      const newX = x + i * dx;
      const newY = y + i * dy;

      if (!isValid(newX, newY) || matrix[newX][newY] !== word[i]) {
        return null;
      }
    }

    const start = [x, y];
    const end = [x + (wordLength - 1) * dx, y + (wordLength - 1) * dy];
    return [start, end];
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (const [dx, dy] of directions) {
        const result = searchFrom(i, j, dx, dy);
        if (result) {
          return result;
        }
      }
    }
  }

  return null;
}

module.exports = findWord;
