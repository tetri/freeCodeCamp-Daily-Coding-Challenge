const getLongestWord = require("./script");

//1. getLongestWord("coding is fun") should return "coding".
//2. getLongestWord("Coding challenges are fun and educational.") should return "educational".
//3. getLongestWord("This sentence has multiple long words.") should return "sentence".

test("getLongestWord 1", () => {
  expect(getLongestWord("coding is fun")).toStrictEqual("coding");
});

test("getLongestWord 2", () => {
  expect(
    getLongestWord("Coding challenges are fun and educational.")
  ).toStrictEqual("educational");
});

test("getLongestWord 3", () => {
  expect(
    getLongestWord("This sentence has multiple long words.")
  ).toStrictEqual("sentence");
});
