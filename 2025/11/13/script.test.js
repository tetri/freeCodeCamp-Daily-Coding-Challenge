const shiftArray = require("./script");

//1. shiftArray([1, 2, 3], 1) should return [2, 3, 1].
//2. shiftArray([1, 2, 3], -1) should return [3, 1, 2].
//3. shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].
//4. shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].
//5. shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].

test("shiftArray 1", () => {
  expect(shiftArray([1, 2, 3], 1)).toStrictEqual([2, 3, 1]);
});

test("shiftArray 2", () => {
  expect(shiftArray([1, 2, 3], -1)).toStrictEqual([3, 1, 2]);
});

test("shiftArray 3", () => {
  expect(shiftArray(["alpha", "bravo", "charlie"], 5)).toStrictEqual([
    "charlie",
    "alpha",
    "bravo",
  ]);
});

test("shiftArray 4", () => {
  expect(shiftArray(["alpha", "bravo", "charlie"], -11)).toStrictEqual([
    "bravo",
    "charlie",
    "alpha",
  ]);
});

test("shiftArray 5", () => {
  expect(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toStrictEqual([
    5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
  ]);
});
