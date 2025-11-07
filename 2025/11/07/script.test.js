const combinations = require("./script");

//1. combinations(52) should return 1.
//2. combinations(1) should return 52.
//3. combinations(2) should return 1326.
//4. combinations(5) should return 2598960.
//5. combinations(10) should return 15820024220.
//6. combinations(50) should return 1326.

test("combinations 1", () => expect(combinations(52)).toBe(1));
test("combinations 2", () => expect(combinations(1)).toBe(52));
test("combinations 3", () => expect(combinations(2)).toBe(1326));
test("combinations 4", () => expect(combinations(5)).toBe(2598960));
test("combinations 5", () => expect(combinations(10)).toBe(15820024220));
test("combinations 6", () => expect(combinations(50)).toBe(1326));
