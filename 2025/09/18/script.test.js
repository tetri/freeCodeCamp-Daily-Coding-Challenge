const costToFill = require("./script");

//1. costToFill(20, 0, 4.00) should return "$80.00".
//2. costToFill(15, 10, 3.50) should return "$17.50".
//3. costToFill(18, 9, 3.25) should return "$29.25".
//4. costToFill(12, 12, 4.99) should return "$0.00".
//5. costToFill(15, 9.5, 3.98) should return "$21.89".

test("costToFill 1", () =>
  expect(costToFill(20, 0, 4.0)).toStrictEqual("$80.00"));
test("costToFill 2", () =>
  expect(costToFill(15, 10, 3.5)).toStrictEqual("$17.50"));
test("costToFill 3", () =>
  expect(costToFill(18, 9, 3.25)).toStrictEqual("$29.25"));
test("costToFill 4", () =>
  expect(costToFill(12, 12, 4.99)).toStrictEqual("$0.00"));
test("costToFill 5", () =>
  expect(costToFill(15, 9.5, 3.98)).toStrictEqual("$21.89"));
