const calculateTips = require("./script");

//1. calculateTips("$10.00", "25%") should return ["$1.50", "$2.00", "$2.50"].
//2. calculateTips("$89.67", "26%") should return ["$13.45", "$17.93", "$23.31"].
//3. calculateTips("$19.85", "9%") should return ["$2.98", "$3.97", "$1.79"].

test("calculateTips 1", () => {
  expect(calculateTips("$10.00", "25%")).toBe(["$1.50", "$2.00", "$2.50"]);
});

test("calculateTips 2", () => {
  expect(calculateTips("$89.67", "26%")).toBe(["$13.45", "$17.93", "$23.31"]);
});

test("calculateTips 3", () => {
  expect(calculateTips("$19.85", "9%")).toBe(["$2.98", "$3.97", "$1.79"]);
});
