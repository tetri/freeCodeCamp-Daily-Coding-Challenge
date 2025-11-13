const findDuplicates = require("./script");

//1. findDuplicates([1, 2, 3, 4, 5]) should return [].
//2. findDuplicates([1, 2, 3, 4, 1, 2]) should return [1, 2].
//3. findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) should return [-6, 0, 2, 4, 5, 23].

test("findDuplicates 1", () => {
  expect(findDuplicates([1, 2, 3, 4, 5])).toStrictEqual([]);
});

test("findDuplicates 2", () => {
  expect(findDuplicates([1, 2, 3, 4, 1, 2])).toStrictEqual([1, 2]);
});

test("findDuplicates 3", () => {
  expect(
    findDuplicates([
      2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
    ])
  ).toStrictEqual([-6, 0, 2, 4, 5, 23]);
});
