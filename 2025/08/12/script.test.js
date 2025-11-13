const isValidNumber = require("./script");

//1. isValidNumber("10101", 2) should return true.
//2. isValidNumber("10201", 2) should return false.
//3. isValidNumber("76543210", 8) should return true.
//4. isValidNumber("9876543210", 8) should return false.
//5. isValidNumber("9876543210", 10) should return true.
//6. isValidNumber("ABC", 10) should return false.
//7. isValidNumber("ABC", 16) should return true.
//8. isValidNumber("Z", 36) should return true.
//9. isValidNumber("ABC", 20) should return true.
//10. isValidNumber("4B4BA9", 16) should return true.
//11. isValidNumber("5G3F8F", 16) should return false.
//12. isValidNumber("5G3F8F", 17) should return true.
//13. isValidNumber("abc", 10) should return false.
//14. isValidNumber("abc", 16) should return true.
//15. isValidNumber("AbC", 16) should return true.
//16. isValidNumber("z", 36) should return true.

test("isValidNumber 1", () => {
  expect(isValidNumber("10101", 2)).toStrictEqual(true);
});

test("isValidNumber 2", () => {
  expect(isValidNumber("10201", 2)).toStrictEqual(false);
});

test("isValidNumber 3", () => {
  expect(isValidNumber("76543210", 8)).toStrictEqual(true);
});

test("isValidNumber 4", () => {
  expect(isValidNumber("9876543210", 8)).toStrictEqual(false);
});

test("isValidNumber 5", () => {
  expect(isValidNumber("9876543210", 10)).toStrictEqual(true);
});

test("isValidNumber 6", () => {
  expect(isValidNumber("ABC", 10)).toStrictEqual(false);
});

test("isValidNumber 7", () => {
  expect(isValidNumber("ABC", 16)).toStrictEqual(true);
});

test("isValidNumber 8", () => {
  expect(isValidNumber("Z", 36)).toStrictEqual(true);
});

test("isValidNumber 9", () => {
  expect(isValidNumber("ABC", 20)).toStrictEqual(true);
});

test("isValidNumber 10", () => {
  expect(isValidNumber("4B4BA9", 16)).toStrictEqual(true);
});

test("isValidNumber 11", () => {
  expect(isValidNumber("5G3F8F", 16)).toStrictEqual(false);
});

test("isValidNumber 12", () => {
  expect(isValidNumber("5G3F8F", 17)).toStrictEqual(true);
});

test("isValidNumber 13", () => {
  expect(isValidNumber("abc", 10)).toStrictEqual(false);
});

test("isValidNumber 14", () => {
  expect(isValidNumber("abc", 16)).toStrictEqual(true);
});

test("isValidNumber 15", () => {
  expect(isValidNumber("AbC", 16)).toStrictEqual(true);
});

test("isValidNumber 16", () => {
  expect(isValidNumber("z", 36)).toStrictEqual(true);
});
