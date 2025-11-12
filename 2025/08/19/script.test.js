const sumOfSquares = require("./script");

//1. sumOfSquares(5) should return 55.
//2. sumOfSquares(10) should return 385.
//3. sumOfSquares(25) should return 5525.
//4. sumOfSquares(500) should return 41791750.
//5. sumOfSquares(1000) should return 333833500.

test("sumOfSquares 1", () => {
  expect(sumOfSquares(5)).toStrictEqual(55);
});

test("sumOfSquares 2", () => {
  expect(sumOfSquares(10)).toStrictEqual(385);
});

test("sumOfSquares 3", () => {
  expect(sumOfSquares(25)).toStrictEqual(5525);
});

test("sumOfSquares 4", () => {
  expect(sumOfSquares(500)).toStrictEqual(41791750);
});

test("sumOfSquares 5", () => {
  expect(sumOfSquares(1000)).toStrictEqual(333833500);
});
