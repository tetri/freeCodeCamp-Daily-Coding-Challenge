function rotate(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const rotated = Array.from({ length: cols }, () => Array(rows));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      rotated[c][rows - 1 - r] = matrix[r][c];
    }
  }

  return rotated;
}

module.exports = rotate;
