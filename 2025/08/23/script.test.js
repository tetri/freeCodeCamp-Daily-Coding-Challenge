const isUnnaturalPrime = require("./script");

//1. isUnnaturalPrime(1) should return false.
//2. isUnnaturalPrime(-1) should return false.
//3. isUnnaturalPrime(19) should return true.
//4. isUnnaturalPrime(-23) should return true.
//5. isUnnaturalPrime(0) should return false.
//6. isUnnaturalPrime(97) should return true.
//7. isUnnaturalPrime(-61) should return true.
//8. isUnnaturalPrime(99) should return false.
//9. isUnnaturalPrime(-44) should return false.

test("isUnnaturalPrime 1", () => {
  expect(isUnnaturalPrime(1)).toStrictEqual(false);
});

test("isUnnaturalPrime 2", () => {
  expect(isUnnaturalPrime(-1)).toStrictEqual(false);
});

test("isUnnaturalPrime 3", () => {
  expect(isUnnaturalPrime(19)).toStrictEqual(true);
});

test("isUnnaturalPrime 4", () => {
  expect(isUnnaturalPrime(-23)).toStrictEqual(true);
});

test("isUnnaturalPrime 5", () => {
  expect(isUnnaturalPrime(0)).toStrictEqual(false);
});

test("isUnnaturalPrime 6", () => {
  expect(isUnnaturalPrime(97)).toStrictEqual(true);
});

test("isUnnaturalPrime 7", () => {
  expect(isUnnaturalPrime(-61)).toStrictEqual(true);
});

test("isUnnaturalPrime 8", () => {
  expect(isUnnaturalPrime(99)).toStrictEqual(false);
});

test("isUnnaturalPrime 9", () => {
  expect(isUnnaturalPrime(-44)).toStrictEqual(false);
});
