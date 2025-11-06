const getWeekday = require("./script");

//1. getWeekday("2025-11-06") should return Thursday.
//2. getWeekday("1999-12-31") should return Friday.
//3. getWeekday("1111-11-11") should return Saturday.
//4. getWeekday("2112-12-21") should return Wednesday.
//5. getWeekday("2345-10-01") should return Monday.

test("getWeekday 1", () => expect(getWeekday("2025-11-06")).toBe("Thursday"));

test("getWeekday 2", () => expect(getWeekday("1999-12-31")).toBe("Friday"));

test("getWeekday 3", () => expect(getWeekday("1111-11-11")).toBe("Saturday"));

test("getWeekday 4", () => expect(getWeekday("2112-12-21")).toBe("Wednesday"));

test("getWeekday 5", () => expect(getWeekday("2345-10-01")).toBe("Monday"));
