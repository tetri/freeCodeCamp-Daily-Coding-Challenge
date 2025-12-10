const formatDate = require("./script");

//1. formatDate("December 6, 2025") should return "2025-12-06".
//2. formatDate("January 1, 2000") should return "2000-01-01".
//3. formatDate("November 11, 1111") should return "1111-11-11".
//4. formatDate("September 7, 512") should return "512-09-07".
//5. formatDate("May 4, 1950") should return "1950-05-04".
//6. formatDate("February 29, 1992") should return "1992-02-29".

test("formatDate 1", () => {
  expect(formatDate("December 6, 2025")).toStrictEqual("2025-12-06");
});

test("formatDate 2", () => {
  expect(formatDate("January 1, 2000")).toStrictEqual("2000-01-01");
});

test("formatDate 3", () => {
  expect(formatDate("November 11, 1111")).toStrictEqual("1111-11-11");
});

test("formatDate 4", () => {
  expect(formatDate("September 7, 512")).toStrictEqual("512-09-07");
});

test("formatDate 5", () => {
  expect(formatDate("May 4, 1950")).toStrictEqual("1950-05-04");
});

test("formatDate 6", () => {
  expect(formatDate("February 29, 1992")).toStrictEqual("1992-02-29");
});
