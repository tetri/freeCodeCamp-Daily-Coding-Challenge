const toRoman = require("./script");

//1. toRoman(18) should return "XVIII".
//2. toRoman(19) should return "XIX".
//3. toRoman(1464) should return "MCDLXIV".
//4. toRoman(2025) should return "MMXXV".
//5. toRoman(3999) should return "MMMCMXCIX".

test("toRoman 1", () => {
  expect(toRoman(18)).toBe("XVIII");
});

test("toRoman 2", () => {
  expect(toRoman(19)).toBe("XIX");
});
test("toRoman 3", () => {
  expect(toRoman(1464)).toBe("MCDLXIV");
});
test("toRoman 4", () => {
  expect(toRoman(2025)).toBe("MMXXV");
});
test("toRoman 5", () => {
  expect(toRoman(3999)).toBe("MMMCMXCIX");
});
