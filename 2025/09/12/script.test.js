const tooMuchScreenTime = require("./script");

//1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.
//2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.
//3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.
//4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.
//5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.
//6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.
//7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.

test("tooMuchScreenTime 1", () => {
  expect(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])).toStrictEqual(false);
});

test("tooMuchScreenTime 2", () => {
  expect(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])).toStrictEqual(false);
});

test("tooMuchScreenTime 3", () => {
  expect(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])).toStrictEqual(false);
});

test("tooMuchScreenTime 4", () => {
  expect(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])).toStrictEqual(true);
});

test("tooMuchScreenTime 5", () => {
  expect(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])).toStrictEqual(true);
});

test("tooMuchScreenTime 6", () => {
  expect(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])).toStrictEqual(true);
});

test("tooMuchScreenTime 7", () => {
  expect(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])).toStrictEqual(true);
});
