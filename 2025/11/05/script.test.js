const buildMatrix = require("./script");

//1. buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].
//2. buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].
//3. buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
//4. buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].

test("buildMatrix 1", () =>
  expect(buildMatrix(2, 3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]));

test("buildMatrix 2", () =>
  expect(buildMatrix(3, 2)).toEqual([
    [0, 0],
    [0, 0],
    [0, 0],
  ]));

test("buildMatrix 3", () =>
  expect(buildMatrix(4, 3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]));

test("buildMatrix 4", () =>
  expect(buildMatrix(9, 1)).toEqual([
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
  ]));
