const oneHundred = require("./script");

//1. oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
//2. oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
//3. oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
//4. oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".

test("oneHundred 1", () => {
  expect(oneHundred("One hundred ")).toStrictEqual(
    "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "
  );
});

test("oneHundred 2", () => {
  expect(oneHundred("freeCodeCamp ")).toStrictEqual(
    "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"
  );
});

test("oneHundred 3", () => {
  expect(oneHundred("daily challenges ")).toStrictEqual(
    "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge"
  );
});

test("oneHundred 4", () => {
  expect(oneHundred("!")).toStrictEqual(
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
});
