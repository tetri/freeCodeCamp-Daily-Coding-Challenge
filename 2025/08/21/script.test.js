const milePace = require("./script");

//1. milePace(3, "24:00") should return "08:00".
//2. milePace(1, "06:45") should return "06:45".
//3. milePace(2, "07:00") should return "03:30".
//4. milePace(26.2, "120:35") should return "04:36".

test("milePace 1", () => {
  expect(milePace(3, "24:00")).toStrictEqual("08:00");
});

test("milePace 2", () => {
  expect(milePace(1, "06:45")).toStrictEqual("06:45");
});

test("milePace 3", () => {
  expect(milePace(2, "07:00")).toStrictEqual("03:30");
});

test("milePace 4", () => {
  expect(milePace(26.2, "120:35")).toStrictEqual("04:36");
});
