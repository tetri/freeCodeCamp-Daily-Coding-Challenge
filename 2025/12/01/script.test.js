const convertToKm = require("./script");

//1. convertToKm(1) should return 1.61.
//2. convertToKm(21) should return 33.8.
//3. convertToKm(3.5) should return 5.63.
//4. convertToKm(0) should return 0.
//5. convertToKm(0.621371) should return 1.

test("convertToKm 1", () => {
  expect(convertToKm(1));
});

test("convertToKm 2", () => {
  expect(convertToKm(21));
});

test("convertToKm 3", () => {
  expect(convertToKm(3.5));
});

test("convertToKm 4", () => {
  expect(convertToKm(0));
});

test("convertToKm 5", () => {
  expect(convertToKm(0.621371));
});
