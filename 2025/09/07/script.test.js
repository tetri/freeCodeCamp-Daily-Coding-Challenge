const parseRomanNumeral = require("./script");

//1. parseRomanNumeral("III") should return 3.
//2. parseRomanNumeral("IV") should return 4.
//3. parseRomanNumeral("XXVI") should return 26.
//4. parseRomanNumeral("XCIX") should return 99.
//5. parseRomanNumeral("CDLX") should return 460.
//6. parseRomanNumeral("DIV") should return 504.
//7. parseRomanNumeral("MMXXV") should return 2025.

test("parseRomanNumeral 1", () => {
  expect(parseRomanNumeral("III")).toBe(3);
});

test("parseRomanNumeral 2", () => {
  expect(parseRomanNumeral("IV")).toBe(4);
});

test("parseRomanNumeral 3", () => {
  expect(parseRomanNumeral("XXVI")).toBe(26);
});

test("parseRomanNumeral 4", () => {
  expect(parseRomanNumeral("XCIX")).toBe(99);
});

test("parseRomanNumeral 5", () => {
  expect(parseRomanNumeral("CDLX")).toBe(460);
});

test("parseRomanNumeral 6", () => {
  expect(parseRomanNumeral("DIV")).toBe(504);
});

test("parseRomanNumeral 7", () => {
  expect(parseRomanNumeral("MMXXV")).toBe(2025);
});
