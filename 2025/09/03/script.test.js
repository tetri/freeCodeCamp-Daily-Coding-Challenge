const isPangram = require("./script");

//1. isPangram("hello", "helo") should return true
//2. isPangram("hello", "hel") should return false
//3. isPangram("hello", "helow") should return false
//4. isPangram("hello world", "helowrd") should return true
//5. isPangram("Hello World!", "helowrd") should return true
//6. isPangram("Hello World!", "heliowrd") should return false
//7. isPangram("freeCodeCamp", "frcdmp") should return false
//8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true

test("isPangram 1", () => {
  expect(isPangram("hello", "helo")).toBe(true);
});

test("isPangram 2", () => {
  expect(isPangram("hello", "hel")).toBe(false);
});

test("isPangram 3", () => {
  expect(isPangram("hello", "helow")).toBe(false);
});

test("isPangram 4", () => {
  expect(isPangram("hello world", "helowrd")).toBe(true);
});

test("isPangram 5", () => {
  expect(isPangram("Hello World!", "helowrd")).toBe(true);
});

test("isPangram 6", () => {
  expect(isPangram("Hello World!", "heliowrd")).toBe(false);
});

test("isPangram 7", () => {
  expect(isPangram("freeCodeCamp", "frcdmp")).toBe(false);
});

test("isPangram 8", () => {
  expect(
    isPangram(
      "The quick brown fox jumps over the lazy dog.",
      "abcdefghijklmnopqrstuvwxyz"
    )
  ).toBe(true);
});
