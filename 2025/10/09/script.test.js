const moonPhase = require("./script");

//1. moonPhase("2000-01-12") should return "New".
//2. moonPhase("2000-01-13") should return "Waxing".
//3. moonPhase("2014-10-15") should return "Full".
//4. moonPhase("2012-10-21") should return "Waning".
//5. moonPhase("2022-12-14") should return "New".

test("moonPhase 1", () => {
  expect(moonPhase("2000-01-12")).toStrictEqual("New");
});

test("moonPhase 2", () => {
  expect(moonPhase("2000-01-13")).toStrictEqual("Waxing");
});

test("moonPhase 3", () => {
  expect(moonPhase("2014-10-15")).toStrictEqual("Full");
});

test("moonPhase 4", () => {
  expect(moonPhase("2012-10-21")).toStrictEqual("Waning");
});

test("moonPhase 5", () => {
  expect(moonPhase("2022-12-14")).toStrictEqual("New");
});
