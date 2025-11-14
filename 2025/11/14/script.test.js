const daysUntilWeekend = require("./script");

//1. daysUntilWeekend("2025-11-14") should return "1 day until the weekend.".
//2. daysUntilWeekend("2025-01-01") should return "3 days until the weekend.".
//3. daysUntilWeekend("2025-12-06") should return "It's the weekend!".
//4. daysUntilWeekend("2026-01-27") should return "4 days until the weekend.".
//5. daysUntilWeekend("2026-09-07") should return "5 days until the weekend.".
//6. daysUntilWeekend("2026-11-29") should return "It's the weekend!".

test("daysUntilWeekend 1", () => {
  expect(daysUntilWeekend("2025-11-14")).toBe("1 day until the weekend.");
});

test("daysUntilWeekend 2", () => {
  expect(daysUntilWeekend("2025-01-01")).toBe("3 days until the weekend.");
});

test("daysUntilWeekend 3", () => {
  expect(daysUntilWeekend("2025-12-06")).toBe("It's the weekend!");
});

test("daysUntilWeekend 4", () => {
  expect(daysUntilWeekend("2026-01-27")).toBe("4 days until the weekend.");
});

test("daysUntilWeekend 5", () => {
  expect(daysUntilWeekend("2026-09-07")).toBe("5 days until the weekend.");
});

test("daysUntilWeekend 6", () => {
  expect(daysUntilWeekend("2026-11-29")).toBe("It's the weekend!");
});
