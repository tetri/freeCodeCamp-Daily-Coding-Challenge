const fibonacciSequence = require("./script");

//1. fibonacciSequence([0, 1], 20) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181].
//2. fibonacciSequence([21, 32], 1) should return [21].
//3. fibonacciSequence([0, 1], 0) should return [].
//4. fibonacciSequence([10, 20], 2) should return [10, 20].
//5. fibonacciSequence([123456789, 987654321], 5) should return [123456789, 987654321, 1111111110, 2098765431, 3209876541].

test("fibonacciSequence 1", () => {
  expect(fibonacciSequence([0, 1], 20)).toStrictEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ]);
});

test("fibonacciSequence 2", () => {
  expect(fibonacciSequence([21, 32], 1)).toStrictEqual([21]);
});

test("fibonacciSequence 3", () => {
  expect(fibonacciSequence([0, 1], 0)).toStrictEqual([]);
});

test("fibonacciSequence 4", () => {
  expect(fibonacciSequence([10, 20], 2)).toStrictEqual([10, 20]);
});

test("fibonacciSequence 5", () => {
  expect(fibonacciSequence([123456789, 987654321], 5)).toStrictEqual([
    123456789, 987654321, 1111111110, 2098765431, 3209876541,
  ]);
});
