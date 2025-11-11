const findMissingNumbers = require("./script");

//1. findMissingNumbers([1, 3, 5]) should return [2, 4].
//2. findMissingNumbers([1, 2, 3, 4, 5]) should return [].
//3. findMissingNumbers([1, 10]) should return [2, 3, 4, 5, 6, 7, 8, 9].
//4. findMissingNumbers([10, 1, 10, 1, 10, 1]) should return [2, 3, 4, 5, 6, 7, 8, 9].
//5. findMissingNumbers([3, 1, 4, 1, 5, 9]) should return [2, 6, 7, 8].
//6. findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) should return [11].

test("findMissingNumbers 1", () => {
  expect(findMissingNumbers([1, 3, 5])).toStrictEqual([2, 4]);
});

test("findMissingNumbers 2", () => {
  expect(findMissingNumbers([1, 2, 3, 4, 5])).toStrictEqual([]);
});

test("findMissingNumbers 3", () => {
  expect(findMissingNumbers([1, 10])).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
});

test("findMissingNumbers 5", () => {
  expect(findMissingNumbers([3, 1, 4, 1, 5, 9])).toStrictEqual([2, 6, 7, 8]);
});

test("findMissingNumbers 6", () => {
  expect(
    findMissingNumbers([
      1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4,
    ])
  ).toStrictEqual([11]);
});
