const count = require("./script.js");

//1. count('abcdefg', 'def') should return 1.
//2. count('hello', 'world') should return 0.
//3. count('mississippi', 'iss') should return 2.
//4. count('she sells seashells by the seashore', 'sh') should return 3.
//5. count('101010101010101010101', '101') should return 10.

test("count 1", () => {
  expect(count("abcdefg", "def")).toBe(1);
});

test("count 2", () => {
  expect(count("hello", "world")).toBe(0);
});

test("count 3", () => {
  expect(count("mississippi", "iss")).toBe(2);
});

test("count 4", () => {
  expect(count("she sells seashells by the seashore", "sh")).toBe(3);
});

test("count 5", () => {
  expect(count("101010101010101010101", "101")).toBe(10);
});
