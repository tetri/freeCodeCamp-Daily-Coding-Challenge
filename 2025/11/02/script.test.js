const infected = require("./script");

//1. infected(1) should return 2.
//2. infected(3) should return 6.
//3. infected(8) should return 152.
//4. infected(17) should return 39808.
//5. infected(25) should return 5217638.

test("infected 1", () => {
  expect(infected(1)).toBe(2);
});

test("infected 2", () => {
  expect(infected(3)).toBe(6);
});

test("infected 3", () => {
  expect(infected(8)).toBe(152);
});

test("infected 4", () => {
  expect(infected(17)).toBe(39808);
});

test("infected 5", () => {
  expect(infected(25)).toBe(5217638);
});
