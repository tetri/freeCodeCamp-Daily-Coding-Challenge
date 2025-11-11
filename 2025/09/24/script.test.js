const isPerfectSquare = require("./script");

//1. isPerfectSquare(9) should return true.
//2. isPerfectSquare(49) should return true.
//3. isPerfectSquare(1) should return true.
//4. isPerfectSquare(2) should return false.
//5. isPerfectSquare(99) should return false.
//6. isPerfectSquare(-9) should return false.
//7. isPerfectSquare(0) should return true.
//8. isPerfectSquare(25281) should return true.

test("isPerfectSquare 1", () => {
  expect(isPerfectSquare(9)).toStrictEqual(true);
});

test("isPerfectSquare 2", () => {
  expect(isPerfectSquare(49)).toStrictEqual(true);
});

test("isPerfectSquare 3", () => {
  expect(isPerfectSquare(1)).toStrictEqual(true);
});

test("isPerfectSquare 4", () => {
  expect(isPerfectSquare(2)).toStrictEqual(false);
});

test("isPerfectSquare 5", () => {
  expect(isPerfectSquare(99)).toStrictEqual(false);
});

test("isPerfectSquare 6", () => {
  expect(isPerfectSquare(-9)).toStrictEqual(false);
});

test("isPerfectSquare 7", () => {
  expect(isPerfectSquare(0)).toStrictEqual(true);
});

test("isPerfectSquare 8", () => {
  expect(isPerfectSquare(25281)).toStrictEqual(true);
});
