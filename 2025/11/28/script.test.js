const compare = require("./script");

//1. compare("APPLE", "POPPA") should return "10201".
//2. compare("REACT", "TRACE") should return "11221".
//3. compare("DEBUGS", "PYTHON") should return "000000".
//4. compare("JAVASCRIPT", "TYPESCRIPT") should return "0000222222".
//5. compare("ORANGE", "ROUNDS") should return "110200".
//6. compare("WIRELESS", "ETHERNET") should return "10021000".

test("compare 1", () => {
  expect(compare("APPLE", "POPPA")).toBe("10201");
});
test("compare 2", () => {
  expect(compare("REACT", "TRACE")).toBe("11221");
});
test("compare 3", () => {
  expect(compare("DEBUGS", "PYTHON")).toBe("000000");
});
test("compare 4", () => {
  expect(compare("JAVASCRIPT", "TYPESCRIPT")).toBe("0000222222");
});
test("compare 5", () => {
  expect(compare("ORANGE", "ROUNDS")).toBe("110200");
});
test("compare 6", () => {
  expect(compare("WIRELESS", "ETHERNET")).toBe("10021000");
});
