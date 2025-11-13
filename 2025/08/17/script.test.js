const findTarget = require("./script");

//1. findTarget([2, 7, 11, 15], 9) should return [0, 1].
//2. findTarget([3, 2, 4, 5], 6) should return [1, 2].
//3. findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
//4. findTarget([1, 3, 5, 7], 14) should return "Target not found".

test("findTarget 1", () => {
  expect(findTarget([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("findTarget 2", () => {
  expect(findTarget([3, 2, 4, 5], 6)).toEqual([1, 2]);
});

test("findTarget 3", () => {
  expect(findTarget([1, 3, 5, 6, 7, 8], 15)).toEqual([4, 5]);
});

test("findTarget 4", () => {
  expect(findTarget([1, 3, 5, 7], 14)).toEqual("Target not found");
});
