const squaresWithThree = require("./script");

//1. squaresWithThree(1) should return 0.
//2. squaresWithThree(10) should return 1.
//3. squaresWithThree(100) should return 19.
//4. squaresWithThree(1000) should return 326.
//5. squaresWithThree(10000) should return 4531.

test("squaresWithThree 1", () => {
  expect(squaresWithThree(1)).toStrictEqual(0);
});

test("squaresWithThree 2", () => {
  expect(squaresWithThree(10)).toStrictEqual(1);
});

test("squaresWithThree 3", () => {
  expect(squaresWithThree(100)).toStrictEqual(19);
});

test("squaresWithThree 4", () => {
  expect(squaresWithThree(1000)).toStrictEqual(326);
});

test("squaresWithThree 5", () => {
  expect(squaresWithThree(10000)).toStrictEqual(4531);
});
