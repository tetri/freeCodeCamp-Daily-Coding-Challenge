const numberOfFiles = require("./script");

//1. numberOfFiles(500, "KB", 1) should return 2000.
//2. numberOfFiles(50000, "B", 1) should return 20000.
//3. numberOfFiles(5, "MB", 1) should return 200.
//4. numberOfFiles(4096, "B", 1.5) should return 366210.
//5. numberOfFiles(220.5, "KB", 100) should return 453514.
//6. numberOfFiles(4.5, "MB", 750) should return 166666.

test("numberOfFiles 1", () => {
  expect(numberOfFiles(500, "KB", 1)).toStrictEqual(2000);
});

test("numberOfFiles 2", () => {
  expect(numberOfFiles(50000, "B", 1)).toStrictEqual(20000);
});

test("numberOfFiles 3", () => {
  expect(numberOfFiles(5, "MB", 1)).toStrictEqual(200);
});

test("numberOfFiles 4", () => {
  expect(numberOfFiles(4096, "B", 1.5)).toStrictEqual(366210);
});

test("numberOfFiles 5", () => {
  expect(numberOfFiles(220.5, "KB", 100)).toStrictEqual(453514);
});

test("numberOfFiles 6", () => {
  expect(numberOfFiles(4.5, "MB", 750)).toStrictEqual(166666);
});
