const arrayDiff = require("./script");

//1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
//2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
//3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
//4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
//5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].

test("arrayDiff 1", () => {
  expect(
    arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])
  ).toStrictEqual(["cherry"]);
});

test("arrayDiff 2", () => {
  expect(
    arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])
  ).toStrictEqual(["cherry"]);
});

test("arrayDiff 3", () => {
  expect(
    arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])
  ).toStrictEqual(["eight", "four", "six", "two"]);
});

test("arrayDiff 4", () => {
  expect(
    arrayDiff(
      ["two", "four", "five", "eight"],
      ["one", "two", "three", "four", "seven", "eight"]
    )
  ).toStrictEqual(["five", "one", "seven", "three"]);
});

test("arrayDiff 5", () => {
  expect(
    arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])
  ).toStrictEqual(["freeCodeCamp", "rocks"]);
});
