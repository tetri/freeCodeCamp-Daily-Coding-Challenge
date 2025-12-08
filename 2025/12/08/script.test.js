const convertToKgs = require("./script");

//1. convertToKgs(1) should return "1 pound equals 0.45 kilograms.".
//2. convertToKgs(0) should return "0 pounds equals 0.00 kilograms.".
//3. convertToKgs(100) should return "100 pounds equals 45.36 kilograms.".
//4. convertToKgs(2.5) should return "2.5 pounds equals 1.13 kilograms.".
//5. convertToKgs(2.20462) should return "2.20462 pounds equals 1.00 kilogram.".

test("convertToKgs 1", () => {
  expect(convertToKgs(1)).toBe("1 pound equals 0.45 kilograms.");
});

test("convertToKgs 2", () => {
  expect(convertToKgs(0)).toBe("0 pounds equals 0.00 kilograms.");
});

test("convertToKgs 3", () => {
  expect(convertToKgs(100)).toBe("100 pounds equals 45.36 kilograms.");
});

test("convertToKga 4", () => {
  expect(convertToKgs(2.5)).toBe("2.5 pounds equals 1.13 kilograms.");
});

test("convertToKgs 5", () => {
  expect(convertToKgs(2.20462)).toBe("2.20462 pounds equals 1.00 kilogram.");
});
