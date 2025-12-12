function getNextLocation(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;

  let pos1 = null;
  let pos2 = null;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (matrix[r][c] === 1) {
        pos1 = [r, c];
      } else if (matrix[r][c] === 2) {
        pos2 = [r, c];
      }
    }
    if (pos1 && pos2) break;
  }

  const [r1, c1] = pos1;
  const [r2, c2] = pos2;

  let dr = r2 - r1;
  let dc = c2 - c1;

  let dr_final = dr;
  let dc_final = dc;

  const r_next_pred = r2 + dr;
  const c_next_pred = c2 + dc;

  if (r_next_pred < 0 || r_next_pred >= R) {
    dr_final = -dr;
  }

  if (c_next_pred < 0 || c_next_pred >= C) {
    dc_final = -dc;
  }

  const r_next = r2 + dr_final;
  const c_next = c2 + dc_final;

  return [r_next, c_next];
}

module.exports = getNextLocation;
