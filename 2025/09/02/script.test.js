const rgbToHex = require("./script");

//1. rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
//2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
//3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
//4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".

test("rgbToHex 1", () => {
  expect(rgbToHex("rgb(255, 255, 255)")).toBe("#ffffff");
});

test("rgbToHex 2", () => {
  expect(rgbToHex("rgb(1, 11, 111)")).toBe("#010b6f");
});

test("rgbToHex 3", () => {
  expect(rgbToHex("rgb(173, 216, 230)")).toBe("#add8e6");
});

test("rgbToHex 4", () => {
  expect(rgbToHex("rgb(79, 123, 201)")).toBe("#4f7bc9");
});
