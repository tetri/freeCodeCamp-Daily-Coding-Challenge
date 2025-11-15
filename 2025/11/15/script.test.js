const gdc = require("./script");

//1. gcd(4, 6) should return 2.
//2. gcd(20, 15) should return 5.
//3. gcd(13, 17) should return 1.
//4. gcd(654, 456) should return 6.
//5. gcd(3456, 4320) should return 864.

test("gcd 1", () => {
  expect(gdc(4, 6)).toStrictEqual(2);
});

test("gcd 2", () => {
  expect(gdc(20, 15)).toStrictEqual(5);
});

test("gcd 3", () => {
  expect(gdc(13, 17)).toStrictEqual(1);
});

test("gcd 4", () => {
  expect(gdc(654, 456)).toStrictEqual(6);
});

test("gcd 5", () => {
  expect(gdc(3456, 4320)).toStrictEqual(864);
});
