const isValidIPv4 = require("./script");

//1. isValidIPv4("192.168.1.1") should return true.
//2. isValidIPv4("0.0.0.0") should return true.
//3. isValidIPv4("255.01.50.111") should return false.
//4. isValidIPv4("255.00.50.111") should return false.
//5. isValidIPv4("256.101.50.115") should return false.
//6. isValidIPv4("192.168.101.") should return false.
//7. isValidIPv4("192168145213") should return false.

test("isValidIPv4 1", () => {
  expect(isValidIPv4("192.168.1.1")).toStrictEqual(true);
});

test("isValidIPv4 2", () => {
  expect(isValidIPv4("0.0.0.0")).toStrictEqual(true);
});

test("isValidIPv4 3", () => {
  expect(isValidIPv4("255.01.50.111")).toStrictEqual(false);
});

test("isValidIPv4 4", () => {
  expect(isValidIPv4("255.00.50.111")).toStrictEqual(false);
});

test("isValidIPv4 5", () => {
  expect(isValidIPv4("256.101.50.115")).toStrictEqual(false);
});

test("isValidIPv4 6", () => {
  expect(isValidIPv4("192.168.101.")).toStrictEqual(false);
});

test("isValidIPv4 7", () => {
  expect(isValidIPv4("192168145213")).toStrictEqual(false);
});
