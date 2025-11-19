function findLandingSpot(matrix) {
  let zeroSpots = [];

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] == 0) zeroSpots.push([i, j]);

  let bestSpot = zeroSpots[0];

  let minValueNeighbors = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < zeroSpots.length; i++) {
    let spot = zeroSpots[i];
    let x = spot[0];
    let y = spot[1];

    let neighbors = 0;
    if (x - 1 >= 0) neighbors += matrix[x - 1][y];
    if (x + 1 <= matrix.length - 1) neighbors += matrix[x + 1][y];
    if (y - 1 >= 0) neighbors += matrix[x][y - 1];
    if (y + 1 <= matrix[x].length - 1) neighbors += matrix[x][y + 1];

    if (neighbors < minValueNeighbors) {
      minValueNeighbors = neighbors;
      bestSpot = spot;
    }
  }

  return bestSpot;
}

module.exports = findLandingSpot;
