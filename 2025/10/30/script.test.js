const nthPrime = require("./script");

//1. nthPrime(5) should return 11.
//2. nthPrime(10) should return 29.
//3. nthPrime(16) should return 53.
//4. nthPrime(99) should return 523.
//5. nthPrime(1000) should return 7919.

test("nthPrime 1", () => {
  expect(nthPrime(5)).toBe(11);
});

test("nthPrime 2", () => {
  expect(nthPrime(10)).toBe(29);
});

test("nthPrime 3", () => {
  expect(nthPrime(16)).toBe(53);
});

test("nthPrime 4", () => {
  expect(nthPrime(99)).toBe(523);
});

test("nthPrime 5", () => {
  expect(nthPrime(1000)).toBe(7919);
});
