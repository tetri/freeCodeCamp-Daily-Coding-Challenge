const lcm = require("./script");

//1. lcm(4, 6) should return 12.
//2. lcm(9, 6) should return 18.
//3. lcm(10, 100) should return 100.
//4. lcm(13, 17) should return 221.
//5. lcm(45, 70) should return 630.

test("lcm 1", () => {
  expect(lcm(4, 6)).toStrictEqual(12);
});

test("lcm 2", () => {
  expect(lcm(9, 6)).toStrictEqual(18);
});

test("lcm 3", () => {
  expect(lcm(10, 100)).toStrictEqual(100);
});

test("lcm 4", () => {
  expect(lcm(13, 17)).toStrictEqual(221);
});

test("lcm 5", () => {
  expect(lcm(45, 70)).toStrictEqual(630);
});
