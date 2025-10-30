const sockPairs = require("./script");

//1. sockPairs(2, 5) should return 1.
//2. sockPairs(1, 2) should return 0.
//3. sockPairs(5, 11) should return 4.
//4. sockPairs(6, 25) should return 3.
//5. sockPairs(1, 8) should return 0.

test("sockPairs 1", () => {
  expect(sockPairs(2, 5)).toBe(1);
});

test("sockPairs 2", () => {
  expect(sockPairs(1, 2)).toBe(0);
});

test("sockPairs 3", () => {
  expect(sockPairs(5, 11)).toBe(4);
});

test("sockPairs 4", () => {
  expect(sockPairs(6, 25)).toBe(3);
});

test("sockPairs 5", () => {
  expect(sockPairs(1, 8)).toBe(0);
});
