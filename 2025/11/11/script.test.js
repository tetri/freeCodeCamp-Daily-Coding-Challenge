const count = require("./script");

//1. count("Hello World") should return [3, 7].
//2. count("JavaScript") should return [3, 7].
//3. count("Python") should return [1, 5].
//4. count("freeCodeCamp") should return [5, 7].
//5. count("Hello, World!") should return [3, 7].
//6. count("The quick brown fox jumps over the lazy dog.") should return [11, 24].

test("count 1", () => {
  expect(count("Hello World")).toBe([3, 7]);
});

test("count 2", () => {
  expect(count("JavaScript")).toBe([3, 7]);
});

test("count 3", () => {
  expect(count("Python")).toBe([1, 5]);
});

test("count 4", () => {
  expect(count("freeCodeCamp")).toBe([5, 7]);
});

test("count 5", () => {
  expect(count("Hello, World!")).toBe([3, 7]);
});

test("count 6", () => {
  expect(count("The quick brown fox jumps over the lazy dog.")).toBe([11, 24]);
});
