const burnCandles = require("./script");

//1. burnCandles(7, 2) should return 13
//2. burnCandles(10, 5) should return 12
//3. burnCandles(20, 3) should return 29
//4. burnCandles(17, 4) should return 22
//5. burnCandles(2345, 3) should return 3517

test("burnCandles 1", () => {
  expect(burnCandles(7, 2)).toStrictEqual(13);
});

test("burnCandles 2", () => {
  expect(burnCandles(10, 5)).toStrictEqual(12);
});

test("burnCandles 3", () => {
  expect(burnCandles(20, 3)).toStrictEqual(29);
});

test("burnCandles 4", () => {
  expect(burnCandles(17, 4)).toStrictEqual(22);
});

test("burnCandles 5", () => {
  expect(burnCandles(2345, 3)).toStrictEqual(3517);
});
