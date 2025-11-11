const tribonacciSequence = require("./script");

//1. tribonacciSequence([0, 0, 1], 20) should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513].
//2. tribonacciSequence([21, 32, 43], 1) should return [21].
//3. tribonacciSequence([0, 0, 1], 0) should return [].
//4. tribonacciSequence([10, 20, 30], 2) should return [10, 20].
//5. tribonacciSequence([10, 20, 30], 3) should return [10, 20, 30].
//6. tribonacciSequence([123, 456, 789], 8) should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134].

test("tribonacciSequence 1", () => {
  expect(tribonacciSequence([0, 0, 1], 20)).toStrictEqual([
    0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768,
    10609, 19513,
  ]);
});

test("tribonacciSequence 2", () => {
  expect(tribonacciSequence([21, 32, 43], 1)).toStrictEqual([21]);
});

test("tribonacciSequence 3", () => {
  expect(tribonacciSequence([0, 0, 1], 0)).toStrictEqual([]);
});

test("tribonacciSequence 4", () => {
  expect(tribonacciSequence([10, 20, 30], 2)).toStrictEqual([10, 20]);
});

test("tribonacciSequence 5", () => {
  expect(tribonacciSequence([10, 20, 30], 3)).toStrictEqual([10, 20, 30]);
});

test("tribonacciSequence 6", () => {
  expect(tribonacciSequence([123, 456, 789], 8)).toStrictEqual([
    123, 456, 789, 1368, 2613, 4770, 8751, 16134,
  ]);
});
