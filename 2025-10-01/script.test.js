const toDecimal = require("./script");

//1. toDecimal("101") should return 5.
//2. toDecimal("1010") should return 10.
//3. toDecimal("10010") should return 18.
//4. toDecimal("1010101") should return 85.

test("toDecimal 1", () => {
  expect(toDecimal("101")).toBe(5);
});

test("toDecimal 2", () => {
  expect(toDecimal("1010")).toBe(10);
});

test("toDecimal 3", () => {
  expect(toDecimal("10010")).toBe(18);
});

test("toDecimal 4", () => {
  expect(toDecimal("1010101")).toBe(85);
});
