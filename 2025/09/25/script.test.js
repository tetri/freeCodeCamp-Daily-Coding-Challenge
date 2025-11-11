const secondLargest = require("./script");

//1. secondLargest([1, 2, 3, 4]) should return 3.
//2. secondLargest([20, 139, 94, 67, 31]) should return 94.
//3. secondLargest([2, 3, 4, 6, 6]) should return 4.
//4. secondLargest([10, -17, 55.5, 44, 91, 0]) should return 55.5.
//5. secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0.

test("secondLargest 1", () => {
  expect(secondLargest([1, 2, 3, 4])).toStrictEqual(3);
});

test("secondLargest 2", () => {
  expect(secondLargest([20, 139, 94, 67, 31])).toStrictEqual(94);
});

test("secondLargest 3", () => {
  expect(secondLargest([2, 3, 4, 6, 6])).toStrictEqual(4);
});

test("secondLargest 4", () => {
  expect(secondLargest([10, -17, 55.5, 44, 91, 0])).toStrictEqual(55.5);
});

test("secondLargest 5", () => {
  expect(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])).toStrictEqual(0);
});
