const countWords = require("./script");

//1. countWords("Hello world") should return 2.
//2. countWords("The quick brown fox jumps over the lazy dog.") should return 9.
//3. countWords("I like coding challenges!") should return 4.
//4. countWords("Complete the challenge in JavaScript and Python.") should return 7.
//5. countWords("The missing semi-colon crashed the entire internet.") should return 7.

test("countWords 1", () => {
  expect(countWords("Hello world")).toBe(2);
});

test("countWords 2", () => {
  expect(countWords("The quick brown fox jumps over the lazy dog.")).toBe(9);
});

test("countWords 3", () => {
  expect(countWords("I like coding challenges!")).toBe(4);
});

test("countWords 4", () => {
  expect(countWords("Complete the challenge in JavaScript and Python.")).toBe(
    7
  );
});

test("countWords 5", () => {
  expect(
    countWords("The missing semi-colon crashed the entire internet.")
  ).toBe(7);
});
