const speeding = require("./script");

//1. speeding([50, 60, 55], 60) should return [0, 0].
//2. speeding([58, 50, 60, 55], 55) should return [2, 4].
//3. speeding([61, 81, 74, 88, 65, 71, 68], 70) should return [4, 8.5].
//4. speeding([100, 105, 95, 102], 100) should return [2, 3.5].
//5. speeding([40, 45, 44, 50, 112, 39], 55) should return [1, 57].

test("speeding 1", () => {
  expect(speeding([50, 60, 55], 60)).toStrictEqual([0, 0]);
});

test("speeding 2", () => {
  expect(speeding([58, 50, 60, 55], 55)).toStrictEqual([2, 4]);
});

test("speeding 3", () => {
  expect(speeding([61, 81, 74, 88, 65, 71, 68], 70)).toStrictEqual([4, 8.5]);
});

test("speeding 4", () => {
  expect(speeding([100, 105, 95, 102], 100)).toStrictEqual([2, 3.5]);
});

test("speeding 5", () => {
  expect(speeding([40, 45, 44, 50, 112, 39], 55)).toStrictEqual([1, 57]);
});
