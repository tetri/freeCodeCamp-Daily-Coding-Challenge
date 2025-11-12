const areAnagrams = require("./script");

//1. areAnagrams("listen", "silent") should return true.
//2. areAnagrams("School master", "The classroom") should return true.
//3. areAnagrams("A gentleman", "Elegant man") should return true.
//4. areAnagrams("Hello", "World") should return false.
//5. areAnagrams("apple", "banana") should return false.
//6. areAnagrams("cat", "dog") should return false.

test("areAnagrams 1", () => {
  expect(areAnagrams("listen", "silent")).toBe(true);
});

test("areAnagrams 2", () => {
  expect(areAnagrams("School master", "The classroom")).toBe(true);
});

test("areAnagrams 3", () => {
  expect(areAnagrams("A gentleman", "Elegant man")).toBe(true);
});

test("areAnagrams 4", () => {
  expect(areAnagrams("Hello", "World")).toBe(false);
});

test("areAnagrams 5", () => {
  expect(areAnagrams("apple", "banana")).toBe(false);
});

test("areAnagrams 6", () => {
  expect(areAnagrams("cat", "dog")).toBe(false);
});
