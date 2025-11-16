const countRectangles = require("./script");

//1. countRectangles(1, 3) should return 6.
//2. countRectangles(3, 2) should return 18.
//3. countRectangles(1, 2) should return 3.
//4. countRectangles(5, 4) should return 150.
//5. countRectangles(11, 19) should return 12540.

test("countRectangles 1", () => {
  expect(countRectangles(1, 3)).toStrictEqual(6);
});

test("countRectangles 2", () => {
  expect(countRectangles(3, 2)).toStrictEqual(18);
});

test("countRectangles 3", () => {
  expect(countRectangles(1, 2)).toStrictEqual(3);
});

test("countRectangles 4", () => {
  expect(countRectangles(5, 4)).toStrictEqual(150);
});

test("countRectangles 5", () => {
  expect(countRectangles(11, 19)).toStrictEqual(12540);
});
