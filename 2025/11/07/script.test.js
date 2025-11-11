const combinations = require("./script");

//1. combinations(52) should return 1.
//2. combinations(1) should return 52.
//3. combinations(2) should return 1326.
//4. combinations(5) should return 2598960.
//5. combinations(10) should return 15820024220.
//6. combinations(50) should return 1326.

test("combinations 1", () => expect(combinations(52)).toStrictEqual(1));
test("combinations 2", () => expect(combinations(1)).toStrictEqual(52));
test("combinations 3", () => expect(combinations(2)).toStrictEqual(1326));
test("combinations 4", () => expect(combinations(5)).toStrictEqual(2598960));
test("combinations 5", () =>
  expect(combinations(10)).toStrictEqual(15820024220));
test("combinations 6", () => expect(combinations(50)).toStrictEqual(1326));
