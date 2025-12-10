const mostFrequent = require("./script");

//1. mostFrequent(["a", "b", "a", "c"]) should return "a".
//2. mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.
//3. mostFrequent([true, false, "false", "true", false]) should return false.
//4. mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.

test("mostFrequent 1", () => {
  expect(mostFrequent(["a", "b", "a", "c"])).toStrictEqual("a");
});

test("mostFrequent 2", () => {
  expect(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9])).toStrictEqual(2);
});

test("mostFrequent 3", () => {
  expect(mostFrequent([true, false, "false", "true", false])).toStrictEqual(false);
});

test("mostFrequent 4", () => {
  expect(mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60])).toStrictEqual(40);
});
