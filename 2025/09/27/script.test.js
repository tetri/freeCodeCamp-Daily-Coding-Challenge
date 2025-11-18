const isSpam = require("./script");

//1. isSpam("+0 (200) 234-0182") should return false.
//2. isSpam("+091 (555) 309-1922") should return true.
//3. isSpam("+1 (555) 435-4792") should return true.
//4. isSpam("+0 (955) 234-4364") should return true.
//5. isSpam("+0 (155) 131-6943") should return true.
//6. isSpam("+0 (555) 135-0192") should return true.
//7. isSpam("+0 (555) 564-1987") should return true.
//8. isSpam("+00 (555) 234-0182") should return false.

test("isSpam 1", () => {
  expect(isSpam("+0 (200) 234-0182")).toBe(false);
});

test("isSpam 2", () => {
  expect(isSpam("+091 (555) 309-1922")).toBe(true);
});

test("isSpam 3", () => {
  expect(isSpam("+1 (555) 435-4792")).toBe(true);
});

test("isSpam 4", () => {
  expect(isSpam("+0 (955) 234-4364")).toBe(true);
});

test("isSpam 5", () => {
  expect(isSpam("+0 (155) 131-6943")).toBe(true);
});

test("isSpam 6", () => {
  expect(isSpam("+0 (555) 135-0192")).toBe(true);
});

test("isSpam 7", () => {
  expect(isSpam("+0 (555) 564-1987")).toBe(true);
});

test("isSpam 8", () => {
  expect(isSpam("+00 (555) 234-0182")).toBe(false);
});
