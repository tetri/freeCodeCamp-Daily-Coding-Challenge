const calculateAge = require("./script");

//1. calculateAge("2000-11-20") should return 25.
//2. calculateAge("2000-12-01") should return 24.
//3. calculateAge("2014-10-25") should return 11.
//4. calculateAge("1994-01-06") should return 31.
//5. calculateAge("1994-12-14") should return 30.

test("calculateAge 1", () => {
  expect(calculateAge("2000-11-20"));
});

test("calculateAge 2", () => {
  expect(calculateAge("2000-12-01"));
});

test("calculateAge 3", () => {
  expect(calculateAge("2014-10-25"));
});

test("calculateAge 4", () => {
  expect(calculateAge("1994-01-06"));
});

test("calculateAge 5", () => {
  expect(calculateAge("1994-12-14"));
});
