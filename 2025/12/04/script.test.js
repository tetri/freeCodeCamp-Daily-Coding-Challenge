const countPermutations = require("./script");

//1. countPermutations("abb") should return 3.
//2. countPermutations("abc") should return 6.
//3. countPermutations("racecar") should return 630.
//4. countPermutations("freecodecamp") should return 39916800.

test("countPermutations 1", () =>
  expect(countPermutations("abb")).toStrictEqual(3));
test("countPermutations 2", () =>
  expect(countPermutations("abc")).toStrictEqual(6));
test("countPermutations 3", () =>
  expect(countPermutations("racecar")).toStrictEqual(630));
test("countPermutations 4", () =>
  expect(countPermutations("freecodecamp")).toStrictEqual(39916800));
