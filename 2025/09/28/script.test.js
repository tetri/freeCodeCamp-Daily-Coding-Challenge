const getHeadings = require("./script");

//1. getHeadings("name,age,city") should return ["name", "age", "city"].
//2. getHeadings("first name,last name,phone") should return ["first name", "last name", "phone"].
//3. getHeadings("username , email , signup date ") should return ["username", "email", "signup date"].

test("getHeadings 1", () => {
  expect(getHeadings("name,age,city")).toStrictEqual(["name", "age", "city"]);
});

test("getHeadings 2", () => {
  expect(getHeadings("first name,last name,phone")).toStrictEqual([
    "first name",
    "last name",
    "phone",
  ]);
});

test("getHeadings 3", () => {
  expect(getHeadings("username , email , signup date ")).toStrictEqual([
    "username",
    "email",
    "signup date",
  ]);
});
