const allUnique = require("./script");

//1. allUnique("abc") should return true.
//2. allUnique("aA") should return true.
//3. allUnique("QwErTy123!@") should return true.
//4. allUnique("~!@#$%^&*()_+") should return true.
//5. allUnique("hello") should return false.
//6. allUnique("freeCodeCamp") should return false.
//7. allUnique("!@#*$%^&*()aA") should return false.

test("allUnique 1", () => {
  expect(allUnique("abc")).toBe(true);
});

test("allUnique 2", () => {
  expect(allUnique("aA")).toBe(true);
});

test("allUnique 3", () => {
  expect(allUnique("QwErTy123!@")).toBe(true);
});

test("allUnique 4", () => {
  expect(allUnique("~!@#$%^&*()_+")).toBe(true);
});

test("allUnique 5", () => {
  expect(allUnique("hello")).toBe(false);
});

test("allUnique 6", () => {
  expect(allUnique("freeCodeCamp")).toBe(false);
});

test("allUnique 7", () => {
  expect(allUnique("!@#*$%^&*()aA")).toBe(false);
});
