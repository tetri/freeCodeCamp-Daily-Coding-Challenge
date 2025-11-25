const isValidMessage = require("./script");

//1. isValidMessage("hello world", "hw") should return true.
//2. isValidMessage("ALL CAPITAL LETTERS", "acl") should return true.
//3. isValidMessage("Coding challenge are boring.", "cca") should return false.
//4. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return true.
//5. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return false.

test("isValidMessage 1", () => {
  expect(isValidMessage("hello world", "hw")).toBe(true);
});

test("isValidMessage 2", () => {
  expect(isValidMessage("ALL CAPITAL LETTERS", "acl")).toBe(true);
});

test("isValidMessage 3", () => {
  expect(isValidMessage("Coding challenge are boring.", "cca")).toBe(false);
});

test("isValidMessage 4", () => {
  expect(
    isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD")
  ).toBe(true);
});

test("isValidMessage 5", () => {
  expect(
    isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT")
  ).toBe(false);
});
