const formatNumber = require("./script");

//1. formatNumber("05552340182") should return "+0 (555) 234-0182".
//2. formatNumber("15554354792") should return "+1 (555) 435-4792".

test("formatNumber 1", () => {
  expect(formatNumber("05552340182")).toStrictEqual("+0 (555) 234-0182");
});

test("formatNumber 2", () => {
  expect(formatNumber("15554354792")).toStrictEqual("+1 (555) 435-4792");
});
