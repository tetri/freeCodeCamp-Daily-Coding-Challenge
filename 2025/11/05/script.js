function buildMatrix(rows, cols) {
  let row = [];
  for (let i = 0; i < cols; i++) row.push(0);
  let matrix = [];
  for (let i = 0; i < rows; i++) matrix.push(row.slice());
  return matrix;
}

module.exports = buildMatrix;
