const mask = require("./script.js");

//1. mask("4012-8888-8888-1881") should return "****-****-****-1881".
//2. mask("5105 1051 0510 5100") should return "**** **** **** 5100".
//3. mask("6011 1111 1111 1117") should return "**** **** **** 1117".
//4. mask("2223-0000-4845-0010") should return "****-****-****-0010".

test("mask 1", () => {
  expect(mask("4012-8888-8888-1881")).toStrictEqual("****-****-****-1881");
});

test("mask 2", () => {
  expect(mask("5105 1051 0510 5100")).toStrictEqual("**** **** **** 5100");
});

test("mask 3", () => {
  expect(mask("6011 1111 1111 1117")).toStrictEqual("**** **** **** 1117");
});

test("mask 4", () => {
  expect(mask("2223-0000-4845-0010")).toStrictEqual("****-****-****-0010");
});
