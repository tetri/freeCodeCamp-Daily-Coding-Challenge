const difference = require('./script');

//1. difference([1, 2, 3], [3, 4, 5]) should return [1, 2, 4, 5].
//2. difference(["a", "b"], ["c", "b"]) should return ["a", "c"].
//3. difference([1, "a", 2], [2, "b", "a"]) should return [1, "b"].
//4. difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [2, 4, 6, 8].

test("difference 1", () => {
  expect(difference([1, 2, 3], [3, 4, 5])).toStrictEqual([1, 2, 4, 5]);
});

test("difference 2", () => {
  expect(difference(["a", "b"], ["c", "b"])).toStrictEqual(["a", "c"]);
});

test("difference 3", () => {
  expect(difference([1, "a", 2], [2, "b", "a"])).toStrictEqual([1, "b"]);
});

test("difference 4", () => {
  expect(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([2, 4, 6, 8]);
});